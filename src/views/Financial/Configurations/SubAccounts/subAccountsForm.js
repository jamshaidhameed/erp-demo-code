import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContentLoader from 'shared/components/loaders/contentLoader';
import SubHeader from 'shared/layout/subHeader';
import { parseError } from 'utils/shared';
import Card from 'shared/components/card';
import { Col, Form, Row } from 'antd';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import useSubAccountGroupsQuery from 'services/api/actions/financial/configurations/subAccountGroups/useSubAccountGroups.query';
import {
  getSubAccount,
  getSubAccountCode,
} from 'services/api/actions/financial/configurations/subAccounts/subAccounts.api';
import SubAccountsListByGroup from './Components/subAccountsListByGroup';
import SelectField from 'shared/controls/inputs/selectField';
import FormElement from 'shared/controls/form';
import PageTitle from 'shared/components/pageTitle';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';
import { CONFIGURATIONS_SUB_ACCOUNTS } from 'router/routes/financialRoutes';
import Button from 'shared/controls/buttons/button';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';
import { useSubAccountsQuery } from 'services/api/actions/financial/configurations';

export default function SubAccountsForm() {
  const { id } = useParams();

  const isEdit = id !== 'new';
  const accountId = isEdit ? parseInt(id?.split('_')?.[0]) : null;

  const [selectedGroup, setSelectedGroup] = useState(undefined);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const { getList: getAllGroups } = useSubAccountGroupsQuery();
  const { updateRecord, addRecord } = useSubAccountsQuery({ loadList: false });

  const initialValues = {
    code: '',
    description: '',
    status: true,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(id && id != 'new' ? true : false);

  const groupId = isEdit ? parseInt(id?.split('_')?.[1]) : null;
  useEffect(() => {
    setSelectedGroup(groupId);
    setSelectedAccount(accountId);
  }, [id]);

  const onSave = (values) => {
    values.status = values.status ? 1 : 0;
    selectedAccount ? editRecord(values) : addNewRecord(values);
  };

  const addNewRecord = (values) => {
    const findGroup = getAllGroups.data?.find((item) => item.OID == values.group);
    const groupDesc = findGroup && findGroup?.ST_SUB_ACCOUNT_GROUP_DESC?.includes('Employe');
    if (groupDesc) {
      const finalData = {
        code: values.code,
        description: values.description,
        status: values.status,
        parent_sub_account_group_code: values.group,
      };

      dispatch(updatePageLoader(true));
      addRecord
        .mutateAsync(finalData)
        .then(() => {
          dispatch(updatePageLoader(false));
          form.resetFields();
        })
        .catch(() => dispatch(updatePageLoader(false)));
    } else {
      toast.error('You can add to Employee group only');
    }
  };

  const editRecord = (values) => {
    const finalData = {
      description: values.description,
      status: values.status,
      account_id: selectedAccount,
    };

    dispatch(updatePageLoader(true));
    updateRecord
      .mutateAsync(finalData)
      .then(() => {
        dispatch(updatePageLoader(false));
        form.resetFields();
        navigate(CONFIGURATIONS_SUB_ACCOUNTS);
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateSubmit = () => {
    const isValid = true;
    form
      .validateFields()
      .then((values) => {
        if (isValid) onSave(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    if (isEdit) {
      const getSelectedGroup = getAllGroups?.data?.find((item) => item.OID === groupId);
      setEditedData(data, getSelectedGroup?.OID);
      // if (getSelectedGroup) {
      //   setEditedData(data, getSelectedGroup?.OID);
      // } else {
      //   toast.error('Something went wrong!');
      //   navigate(CONFIGURATIONS_SUB_ACCOUNTS);
      // }
    } else {
      setEditedData(data, data?.GL_SUB_ACCOUNT_GROUPS);
    }
  };

  const setEditedData = (data, groupId) => {
    const { POST, ST_SUB_ACCOUNT_CODE, ST_SUB_ACCOUNT_DESC } = data;
    form.setFields([
      { name: 'code', value: ST_SUB_ACCOUNT_CODE },
      { name: 'status', value: POST },
      { name: 'description', value: ST_SUB_ACCOUNT_DESC },
      { name: 'group', value: groupId },
    ]);
  };

  const getDetails = (subAccountId) => {
    setSelectedAccount(subAccountId);
    getSubAccount(subAccountId)
      .then((response) => {
        setLoading(false);
        loadData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(parseError(error));
        navigate(CONFIGURATIONS_SUB_ACCOUNTS);
      });
  };

  const getLatestCode = () => {
    getSubAccountCode()
      .then((res) => {
        form.setFieldValue('code', res?.data?.account_code);
      })
      .catch((error) => toast.error(parseError(error)));
  };
  const handleChangeGroup = (val) => {
    setSelectedGroup(parseInt(val));
    getLatestCode();
    setSelectedAccount(null);
    form.setFields([
      { name: 'code', value: '' },
      { name: 'status', value: true },
      { name: 'description', value: '' },
    ]);
  };

  useEffect(() => {
    if (isEdit && getAllGroups?.data) getDetails(accountId);
  }, [getAllGroups.data]);

  const groupsList = getAllGroups?.data?.map((item) => ({
    label: `${item.ST_SUB_ACCOUNT_GROUP_CODE}-${item.ST_SUB_ACCOUNT_GROUP_DESC}`,
    value: item.OID,
  }));

  return (
    <>
      <SubHeader name={`${id && id !== 'new' ? 'Edit' : 'Add'} Sub Account`} />
      <div className="app_page_content">
        {loading ? (
          <ContentLoader />
        ) : (
          <Card>
            <PageTitle title="Sub Account Details" />
            <FormElement
              name="subAccountsForm"
              className="px-8 pb-5 sub_accounts-form"
              form={form}
              initialValues={initialValues}>
              <Row
                align="middle"
                justify="flex-start"
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}>
                <Col lg={6}>
                  <SelectField
                    label="Sub Account Groups"
                    name="group"
                    placeholder="Select group"
                    messageLabel="group"
                    controlled
                    required
                    value={selectedGroup}
                    onChange={handleChangeGroup}
                    options={groupsList}
                  />
                </Col>
                <Col lg={6}>
                  <InputField
                    label="	Sub Account Code"
                    disabled
                    type={INPUT_TYPES.text}
                    name="code"
                    placeholder="Enter code"
                  />
                </Col>
                <Col lg={6}>
                  <InputField
                    label="	Sub Account Description"
                    type={INPUT_TYPES.text}
                    name="description"
                    messageLabel="description"
                    required
                    placeholder="Enter description"
                  />
                </Col>
                <Col lg={6}>
                  <SwitchField label="Active" name="status" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={3}>
                  <Button label="Submit" className="w-100" onClick={validateSubmit} />
                </Col>
              </Row>
            </FormElement>

            <SubAccountsListByGroup group={selectedGroup} getSubAccountDetails={getDetails} />
          </Card>
        )}
      </div>
    </>
  );
}
