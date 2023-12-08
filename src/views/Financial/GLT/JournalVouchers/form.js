import SubHeader from 'shared/layout/subHeader';
import {
  DATE_FORMATE,
  DEFAULT_MSG,
  FORM_SUBMIT_TYPES,
  shortKeys,
  DEFAULT_AUTO_COMPLETE,
} from 'constants/shared/common';
import { Divider, Form } from 'antd';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Card from 'shared/components/card';
import ParentFormSection from './Components/parentFormSection';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';
import { useDispatch, useSelector } from 'react-redux';
import { elementIds, transactionModules } from 'constants/financial';
import { updatePageLoader } from 'store/actions/shared';
import { useJournalVouchersQuery } from 'services/api/actions/financial/GLTransactions';
import { toast } from 'react-toastify';
import {
  getJournalVoucher,
  reverseJournalVoucher,
} from 'services/api/actions/financial/GLTransactions/journalVouchers/journalVouchers.api';
import { parseError } from 'utils/shared';
import { GLT_JV, GLT_JV_FORM_BASE } from 'router/routes/financialRoutes';
import DetailFormSection from './Components/detailFormSection';
import { listByAttributeName, resolveArray } from 'utils/shared/list';
import DetailsListSection from './Components/detailsListSection';
import { thousandFormat, tryParseFloat } from 'utils/shared/numbers';
import { useCostCentreQuery } from 'services/api/actions/ams';
import { calculateJVStats, getJVStatus } from 'helpers/financial/journalVouchers';
import { printContainer } from 'utils/shared/files';
import JVPrint from './Components/jvPrint';

const GET_TYPES = {
  load: 'load',
  print: 'print',
};

const modes = {
  new: 'new',
  edit: 'edit',
  copy: 'copy',
};

const natures = [
  {
    label: 'Debit',
    value: 'debit',
  },
  {
    label: 'Credit',
    value: 'credit',
  },
];

const childDefault = {
  account: { ...DEFAULT_AUTO_COMPLETE },
  subAccount: { ...DEFAULT_AUTO_COMPLETE },
  cost_centre: undefined,
  narration: '',
  credit_or_debit: undefined,
  amount: '',
  id: '',
};

const statsDefault = {
  totalCredit: thousandFormat(0),
  totalDebit: thousandFormat(0),
  difference: thousandFormat(0),
  netDifference: thousandFormat(0),
};

export default function JournalVoucherForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { configs } = useSelector((state) => state);
  const [parentForm] = Form.useForm();
  const [childForm] = Form.useForm();
  const location = useLocation();
  const { id: editId } = useParams();
  const copyId = location?.state?.id || null;
  const formMode = editId === 'new' ? (copyId ? modes.copy : modes.new) : modes.edit;
  const formId = editId === 'new' ? copyId : editId;

  const { getList: getCostCentreList } = useCostCentreQuery();
  const costCentreList = getCostCentreList.isError ? [] : getCostCentreList?.data || [];
  const costCentresById = useMemo(
    () => listByAttributeName(costCentreList, 'id'),
    [costCentreList]
  );

  const parentDefault = {
    book_id: undefined,
    voucher_date: formReadableDT(new Date()),
    location: configs?.location,
    voucher_narration: '',
    currency_id: undefined,
    currency_rate: '',
    is_submitted: 0,
    is_approved: 0,
    voucher_code: '',
    voucher_status: '',
    module: transactionModules.GL,
    id: '',
  };

  const { submitRecord, submitDetailRecord, deleteDetailRecord } = useJournalVouchersQuery();

  const [printData, setPrintData] = useState(null);
  const [parentInitialValues, setParentInitialValues] = useState({ ...parentDefault });
  const [detailInitialValues, setDetailInitialValues] = useState({ ...childDefault });
  const [detailList, setDetailList] = useState([]);
  const [detailFilteredList, setDetailFilteredList] = useState([]);
  const [detailStats, setDetailStats] = useState({ ...statsDefault });

  // Parent's functions
  const handleParentSubmit = (data) => {
    if (!parentInitialValues.id) {
      navigate(`${GLT_JV_FORM_BASE}/${data.voucher_id}`);
      return;
    }

    setParentInitialValues({
      ...parentInitialValues,
      id: data.voucher_id,
      is_submitted: data.is_submitted,
      is_approved: data.is_approved,
      voucher_code: data.voucher_code,
    });

    parentForm.setFields([
      { name: 'voucher_code', value: data.voucher_code },
      { name: 'voucher_status', value: getJVStatus(data.is_submitted, data.is_approved) },
    ]);
  };

  const onParentSubmit = (values) => {
    dispatch(updatePageLoader(true));
    submitRecord
      .mutateAsync(values)
      .then((response) => {
        handleParentSubmit(response.data);
        dispatch(updatePageLoader(false));
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateParentSubmit = (is_submitted, is_approved) => {
    parentForm
      .validateFields()
      .then((values) => {
        delete values.module;
        delete values.voucher_code;
        delete values.voucher_status;
        values.voucher_date = dateTimeToString(new Date(values.voucher_date), DATE_FORMATE[9]);
        values.is_submitted = is_submitted;
        values.is_approved = is_approved;
        values.currency_rate = tryParseFloat(values.currency_rate);
        if (parentInitialValues.id) values.voucher_id = parentInitialValues.id;
        else if (formMode === modes.copy) values.copy_voucher_id = formId.toString();
        onParentSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const approveJV = () => {
    if (tryParseFloat(detailStats.netDifference) !== 0)
      return toast.error('Debit and Credit must be equal');
    validateParentSubmit(1, 1);
  };
  // Parent's functions

  // Detail's Functions
  const onDetailSearch = () => {
    if (detailList.length === 0) return setDetailFilteredList([]);

    const main_account_id = detailInitialValues.account.option?.value ?? '';
    const sub_account_id = detailInitialValues.subAccount.option?.value ?? '';
    const cost_centre = childForm.getFieldValue('cost_centre') ?? '';
    const narration = childForm.getFieldValue('narration');
    const credit_or_debit = childForm.getFieldValue('credit_or_debit') ?? '';
    const amount = childForm.getFieldValue('amount');

    if (
      !main_account_id &&
      !sub_account_id &&
      !cost_centre &&
      !narration &&
      !credit_or_debit &&
      amount === ''
    )
      return setDetailFilteredList([...detailList]);

    const filteredList = [...detailList].filter(
      (item) =>
        (!main_account_id || main_account_id === item.GL_MAIN_ACCOUNTS_OID) &&
        (!sub_account_id || sub_account_id === item.GL_SUB_ACCOUNTS_OID) &&
        (!cost_centre || cost_centre === item.CostCentre) &&
        (!narration ||
          (item.ST_LINE_NARRATION ?? '').toLowerCase().includes(narration.toLowerCase())) &&
        (!credit_or_debit || credit_or_debit === item.TYPE) &&
        (amount === '' || tryParseFloat(amount) === tryParseFloat(item.original_amount))
    );

    setDetailFilteredList(filteredList);
  };

  const populateBalance = () => {
    const balanceAmount = tryParseFloat(detailStats.netDifference);
    setDetailInitialValues((prev) => ({
      ...prev,
      amount: balanceAmount,
    }));

    childForm.setFields([{ name: 'amount', value: balanceAmount }]);
  };

  const onDetailChange = (name, value) => {
    const updated = { [name]: value };
    if (name === 'account' && value.option == null)
      updated.subAccount = { ...DEFAULT_AUTO_COMPLETE };
    setDetailInitialValues({ ...detailInitialValues, ...updated });
  };

  const resetDetailForm = () => {
    setDetailInitialValues({
      ...detailInitialValues,
      ...childDefault,
    });

    setDetailFilteredList(detailList);

    setTimeout(() => {
      childForm.resetFields();
    }, 0);
  };

  const handleDetailSubmit = (data, type) => {
    const prevList = [...detailList];
    if (type === FORM_SUBMIT_TYPES.save) prevList.unshift(data);
    else if (type === FORM_SUBMIT_TYPES.update) {
      const index = prevList.findIndex((x) => x.id == data.id);
      if (index > -1 && prevList[index]) prevList[index] = data;
    } else if (type === FORM_SUBMIT_TYPES.delete) {
      const index = prevList.findIndex((a) => a.id == data.id);
      if (index > -1) prevList.splice(index, 1);
    }

    setDetailList(prevList);
    setDetailFilteredList(prevList);
    setDetailInitialValues({
      ...detailInitialValues,
      ...childDefault,
    });

    setTimeout(() => {
      childForm.resetFields();
    }, 0);
  };

  const onDetailDelete = (recordId) => {
    dispatch(updatePageLoader(true));
    deleteDetailRecord
      .mutateAsync(recordId)
      .then(() => {
        handleDetailSubmit({ id: recordId }, FORM_SUBMIT_TYPES.delete);
        dispatch(updatePageLoader(false));
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const onDetailEdit = (record) => {
    const amount = tryParseFloat(record.original_amount);
    const subAccountUpdate =
      record.GL_SUB_ACCOUNTS_OID && record.GL_SUB_ACCOUNTS_OID != 0
        ? {
            defaultValue: record.GL_SUB_ACCOUNTS_OID,
          }
        : { ...DEFAULT_AUTO_COMPLETE };

    setDetailInitialValues((prev) => ({
      ...prev,
      account: { ...prev.account, defaultValue: record.GL_MAIN_ACCOUNTS_OID },
      subAccount: { ...subAccountUpdate },
      cost_centre: record.CostCentre,
      narration: record.ST_LINE_NARRATION,
      credit_or_debit: record.TYPE,
      amount,
      id: record.id,
    }));

    childForm.setFields([
      { name: 'cost_centre', value: record.CostCentre },
      { name: 'narration', value: record.ST_LINE_NARRATION },
      { name: 'credit_or_debit', value: record.TYPE },
      { name: 'amount', value: amount },
    ]);
  };

  const onDetailSubmit = (values) => {
    dispatch(updatePageLoader(true));
    submitDetailRecord
      .mutateAsync(values)
      .then((response) => {
        handleDetailSubmit(
          response.data,
          values.voucher_detail_id ? FORM_SUBMIT_TYPES.update : FORM_SUBMIT_TYPES.save
        );
        dispatch(updatePageLoader(false));
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateDetailSubmit = (type) => {
    childForm
      .validateFields()
      .then((values) => {
        if (detailInitialValues.account.option === null)
          return toast.error('Please select main account');

        if (
          detailInitialValues.account.option.GL_SUB_ACCOUNT_GROUPS &&
          detailInitialValues.subAccount.option === null
        )
          return toast.error('Please select sub account');

        values.amount = tryParseFloat(values.amount);
        values.voucher_id = parentInitialValues.id;
        values.main_account_id = detailInitialValues.account.option.value;
        values.sub_account_id = detailInitialValues.subAccount.option?.value?.toString() ?? '0';
        if (type === FORM_SUBMIT_TYPES.update && detailInitialValues.id)
          values.voucher_detail_id = detailInitialValues.id;
        onDetailSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };
  // Detail's Functions

  const onReverse = () => {
    dispatch(updatePageLoader(true));
    reverseJournalVoucher(parentInitialValues.id)
      .then(() => {
        dispatch(updatePageLoader(false));
        toast.success('Record created successfully');
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
      });
  };

  const resetForm = () => {
    setParentInitialValues({
      ...parentInitialValues,
      ...parentDefault,
    });

    setDetailInitialValues({
      ...detailInitialValues,
      ...childDefault,
    });

    setDetailList([]);
    setDetailFilteredList([]);
    if (formMode !== modes.new) navigate(`${GLT_JV_FORM_BASE}/new`);

    setTimeout(() => {
      parentForm.resetFields();
      childForm.resetFields();
    }, 0);
  };

  const loadData = (data) => {
    let updateData = {
      currency_id: data.currency_id,
      module: data.Trans_Name ?? '',
    };

    if (formMode === modes.edit) {
      updateData = {
        ...updateData,
        id: formId,
        is_submitted: data.is_submitted,
        is_approved: data.is_approved,
        voucher_code: data.voucher_code,
      };
    }

    setParentInitialValues({
      ...parentInitialValues,
      ...updateData,
    });

    const resolvedList = resolveArray(data.voucherDetails);
    setDetailList(resolvedList);
    setDetailFilteredList(resolvedList);

    const voucherDate = data.voucher_date ? formReadableDT(data.voucher_date) : null;
    parentForm.setFields([
      { name: 'book_id', value: data.book_id },
      { name: 'voucher_date', value: voucherDate },
      { name: 'location', value: data.location },
      { name: 'voucher_narration', value: data.voucher_narration },
      { name: 'currency_id', value: data.currency_id || undefined },
      { name: 'currency_rate', value: tryParseFloat(data.CURRENCY_RATE) },
      { name: 'voucher_code', value: formMode === modes.edit ? data.voucher_code : '' },
      {
        name: 'voucher_status',
        value: formMode === modes.edit ? getJVStatus(data.is_submitted, data.is_approved) : '',
      },
      { name: 'module', value: data.Trans_Name ?? '' },
    ]);
  };

  const printJV = (data) => {
    const { totalCredit, totalDebit, difference } = calculateJVStats(data?.voucherDetails);
    setPrintData({ ...data, totalCredit, totalDebit, difference });
    setTimeout(() => {
      printContainer(elementIds.JV_PRINT_CONTENT_FORM);
      setPrintData(null);
    }, 10);
  };

  const getDetails = (recordId, type) => {
    dispatch(updatePageLoader(true));
    getJournalVoucher(recordId)
      .then((response) => {
        dispatch(updatePageLoader(false));
        if (type === GET_TYPES.load) loadData(response.data);
        else if (type === GET_TYPES.print) printJV(response.data);
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
        navigate(GLT_JV);
      });
  };

  useEffect(() => {
    if (formId) {
      if (!getCostCentreList.isLoading) getDetails(formId, GET_TYPES.load);
    } else resetForm();
  }, [getCostCentreList.isLoading, formId]);

  useEffect(() => {
    const { difference } = calculateJVStats(detailList);
    setDetailStats((prev) => ({
      ...prev,
      netDifference: difference,
    }));
  }, [detailList]);

  useEffect(() => {
    const { totalCredit, totalDebit, difference } = calculateJVStats(detailFilteredList);
    setDetailStats((prev) => ({
      ...prev,
      totalCredit,
      totalDebit,
      difference,
    }));
  }, [detailFilteredList]);

  const buttons = [
    {
      label: 'JV Reversal',
      shortKey: shortKeys.F1,
      disabled: parentInitialValues.id && parentInitialValues.is_approved == 1 ? false : true,
      onClick: onReverse,
    },
    {
      label: 'Submitted',
      shortKey: shortKeys.F3,
      disabled: parentInitialValues.is_submitted == 1,
      onClick: () => validateParentSubmit(1, parentInitialValues.is_approved),
    },
    {
      label: 'Approved By',
      shortKey: shortKeys.F4,
      disabled: parentInitialValues.is_approved == 1,
      onClick: approveJV,
    },
    {
      label: 'Print',
      shortKey: shortKeys.F5,
      disabled: parentInitialValues.id ? false : true,
      onClick: () => getDetails(parentInitialValues.id, GET_TYPES.print),
    },
    {
      label: 'New',
      shortKey: shortKeys.F6,
      onClick: resetForm,
    },
    {
      label: 'Void',
      onClick: () => validateParentSubmit(parentInitialValues.is_submitted, 0),
      disabled: parentInitialValues.is_approved != 1,
    },
  ];

  return (
    <>
      <SubHeader
        name={`${
          parentInitialValues.id ? 'Edit' : formMode === modes.copy ? 'Copy' : 'Add'
        } Journal Voucher`}
        buttons={buttons}
        redirectURL={GLT_JV}
        redirectLabel="List"
        responsiveClass="jv-subheader-menu"
      />

      <JVPrint
        containerId={elementIds.JV_PRINT_CONTENT_FORM}
        costCentresById={costCentresById}
        data={printData}
      />

      <div className="app_page_content">
        <Card>
          <ParentFormSection
            form={parentForm}
            initialValues={parentInitialValues}
            locations={configs.locations}
            validateSubmit={validateParentSubmit}
          />

          {!parentInitialValues.id && formMode === modes.copy && (
            <span className="ps-5 text-danger">
              Please save master record first to manage details.
            </span>
          )}

          <Divider />

          <DetailFormSection
            form={childForm}
            parentInitialValues={parentInitialValues}
            initialValues={detailInitialValues}
            onChange={onDetailChange}
            natures={natures}
            validateSubmit={validateDetailSubmit}
            resetForm={resetDetailForm}
            populateBalance={populateBalance}
            onSearch={onDetailSearch}
            costCentreList={costCentreList}
            costCentreLoading={getCostCentreList.isLoading}
            formMode={formMode}
            modes={modes}
          />

          <DetailsListSection
            data={detailFilteredList}
            isApproved={parentInitialValues.is_approved}
            onEdit={onDetailEdit}
            onDelete={onDetailDelete}
            detailStats={detailStats}
            costCentresById={costCentresById}
            formMode={formMode}
            modes={modes}
          />
        </Card>
      </div>
    </>
  );
}
