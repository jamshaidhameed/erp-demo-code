import SubHeader from 'shared/layout/subHeader';
import TreeIndicator from 'shared/controls/tree';
import Card from 'shared/components/card';
import ChartOfAccountForm from './Components/chartOfAccountsForm';
import { Divider, Form } from 'antd';
import { useCOAQuery } from 'services/api/actions/financial/configurations';
import { useState } from 'react';
import { getCOA } from 'services/api/actions/financial/configurations/chartOfAccounts/coa.api';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { resolveObject, parseError } from 'utils/shared';
import { DEFAULT_MSG } from 'constants/shared/common';
import { tryParseInt } from 'utils/shared/numbers';
import { padZeros } from 'utils/shared/strings';

const DEFAULT_INITIAL = {
  personal_code: '',
  account_desc: '',
  sub_account_group: undefined,
  st_nature: undefined,
  status: false,
  is_code_editable: false,
  current_code_length: 1,
};

export default function ChartOfAccounts() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { getList, addRecord, updateRecord } = useCOAQuery();

  const [parent, setParent] = useState(null);
  const [selected, setSelected] = useState(null);
  const [activeNode, setActiveNode] = useState([]);
  const [initialValues, setInitialValues] = useState({ ...DEFAULT_INITIAL });

  const updateParent = (data = null) => {
    if (data) {
      const update = {
        ...data,
        label: data.code > 0 && data.description ? `${data.code}-${data.description}` : '',
      };
      setParent(
        parent
          ? {
              ...parent,
              ...update,
            }
          : update
      );
      return;
    }
    setParent(null);
  };

  const onSave = (values) => {
    addRecord
      .mutateAsync(values)
      .then(async () => {
        dispatch(updatePageLoader(false));
        const updatedDetails = await getCOADetail(parent.id, 'get');
        const lastCode = updatedDetails?.child_code ?? '';
        const nextCode = lastCode ? generateNextCode(lastCode, parent.child_code_length) : null;
        form.setFields([
          { name: 'personal_code', value: nextCode ?? '' },
          { name: 'account_desc', value: DEFAULT_INITIAL.account_desc },
          { name: 'sub_account_group', value: DEFAULT_INITIAL.sub_account_group },
          { name: 'status', value: DEFAULT_INITIAL.status },
          { name: 'st_nature', value: nextCode ? parent.nature : DEFAULT_INITIAL.st_nature },
        ]);

        if (nextCode !== null) return;
        updateParent(null);
        setInitialValues((prev) => ({
          ...prev,
          ...DEFAULT_INITIAL,
        }));
        setSelected(null);
        setActiveNode([]);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const onUpdate = (values) => {
    updateRecord
      .mutateAsync(values)
      .then(() => {
        dispatch(updatePageLoader(false));
        getCOADetail(selected.OID);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        values.personal_code = padZeros(values.personal_code, initialValues.current_code_length);

        values.account_code =
          parent.currentAccountLevel === 1
            ? values.personal_code
            : `${parent.code}${values.personal_code}`;

        values.sub_account_group = values.sub_account_group
          ? parseInt(values.sub_account_group)
          : 0;

        values.parent_id = parent.id;
        values.account_level = parent.currentAccountLevel;
        values.leaf_node = parent.currentAccountLevel === 4 ? '1' : '0';
        values.status = values.status === true || values.status == 1 ? '1' : '0';
        dispatch(updatePageLoader(true));

        if (selected) {
          values.main_account_id = selected.OID.toString();
          onUpdate(values);
        } else onSave(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    form.resetFields();
    form.setFields([
      { name: 'personal_code', value: data.ST_OLD_CODE },
      { name: 'account_desc', value: data.ST_MAIN_ACCOUNT_DESC },
      {
        name: 'sub_account_group',
        value:
          data.GL_SUB_ACCOUNT_GROUPS && data.GL_SUB_ACCOUNT_GROUPS != 0
            ? data.GL_SUB_ACCOUNT_GROUPS
            : undefined,
      },
      { name: 'st_nature', value: data.ST_NATURE },
      { name: 'status', value: data.POST == 1 },
    ]);

    updateParent({
      id: data.PARENT_ID,
      code: data.parent_code,
      description: data.parent_desc,
      nature: data.ST_NATURE,
      currentAccountLevel: data.gl_main_accounts_level,
      childCode: data.child_code,
      child_code_length: data.child_code_length,
    });

    setInitialValues((prev) => ({
      ...prev,
      is_code_editable: data.is_code_editable,
      current_code_length: data.main_code_length,
    }));
    setSelected(selected ? { ...selected, ...data } : data);
    setActiveNode([data.OID]);
  };

  const getCOADetail = async (OID, type = 'load') => {
    dispatch(updatePageLoader(true));
    return await getCOA(OID)
      .then((response) => {
        dispatch(updatePageLoader(false));
        const detail = resolveObject(response.data);
        if (detail) {
          if (type === 'load') {
            loadData(detail);
          } else return detail;
        } else {
          toast.error(parseError(DEFAULT_MSG.StandardErrorMsg));
          return null;
        }
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
        return null;
      });
  };

  const generateNextCode = (lastCode, codeLength) => {
    let prevCode = lastCode ?? 0;
    prevCode = tryParseInt(prevCode) + 1;
    if (prevCode.toString().length > codeLength) {
      toast.error("Can't add, max code limit reached.");
      return null;
    }
    return padZeros(prevCode, codeLength);
  };

  const onAdd = () => {
    const nextCode = generateNextCode(parent.childCode, parent.child_code_length);
    if (nextCode === null) return;

    form.resetFields();
    form.setFields([
      { name: 'personal_code', value: nextCode },
      { name: 'account_desc', value: DEFAULT_INITIAL.account_desc },
      { name: 'sub_account_group', value: DEFAULT_INITIAL.sub_account_group },
      { name: 'st_nature', value: selected.ST_NATURE },
      { name: 'status', value: DEFAULT_INITIAL.status },
    ]);

    setInitialValues((prev) => ({
      ...prev,
      is_code_editable: true,
      current_code_length: parent.child_code_length,
    }));

    updateParent({
      id: selected.OID,
      code: selected.ST_MAIN_ACCOUNT_CODE,
      description: selected.ST_MAIN_ACCOUNT_DESC,
      nature: selected.ST_NATURE,
      currentAccountLevel: parseInt(parent.currentAccountLevel) + 1,
    });

    setActiveNode([selected.OID]);
    setSelected(null);
  };

  const buttons = [
    {
      label: 'Add',
      onClick: onAdd,
      disabled: parent === null || selected === null || selected.IS_LEAF_NODE == 1,
    },
  ];

  return (
    <>
      <SubHeader name="Chart Of Accounts" buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <ChartOfAccountForm
            form={form}
            initialValues={initialValues}
            selected={selected}
            parent={parent}
            validateSubmit={validateSubmit}
          />

          <div className="chart_of_account_divider">
            <Divider />
          </div>

          <TreeIndicator
            selectable
            loading={getList.isLoading}
            treeData={getList.isError ? [] : getList?.data || []}
            onSelect={(selectedKeys, e) => getCOADetail(e.node.ID)}
            selectedKeys={activeNode}
            titleRender={(nodeData) =>
              `${nodeData.PERSONAL_CODE}-${nodeData.NAME?.toString().toLowerCase()}`
            }
            fieldNames={{ title: 'NAME', key: 'ID', children: 'CHILDREN' }}
          />
        </Card>
      </div>
    </>
  );
}
