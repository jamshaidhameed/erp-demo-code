import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FR_FAC } from 'router/routes/financialRoutes';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserDefinedFA } from 'services/api/actions/financial/financialReports/userDefinedFinalAC/userDefinedFinalAC.api';
import { useEffect, useState } from 'react';
import { Divider, Form } from 'antd';
import SubHeader from 'shared/layout/subHeader';
import { useUserDefinedFACQuery } from 'services/api/actions/financial/financialReports';
import Card from 'shared/components/card';
import { DEFAULT_MSG, DEFAULT_AUTO_COMPLETE, FORM_SUBMIT_TYPES } from 'constants/shared/common';
import ParentFormSection from './Components/parentFormSection';
import DetailFormSection from './Components/detailFormSection';
import DetailsListSection from './Components/detailsListSection';

const DEFAULT_PARENT = {
  description: '',
  type: 'debit',
  post: false,
};

const DEFAULT_CHILD = {
  fromAccount: { ...DEFAULT_AUTO_COMPLETE },
  toAccount: { ...DEFAULT_AUTO_COMPLETE },
  reportId: undefined,
  lineNo: '5',
  type: 'debit',
  sumDetail: 'sum',
  str1: '',
  str2: '',
  symbol: 'add',
  addRefToNo: '',
  refNo: '',
  print: false,
  bold: false,
  indentPosition: '',
  parenth: false,
  id: '',
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
  {
    label: 'Both',
    value: 'both',
  },
];

const sum_detail_options = [
  {
    label: 'Sum',
    value: 'sum',
  },
  {
    label: 'Detail',
    value: 'detail',
  },
];

const symbol_options = [
  {
    label: '+ Add',
    value: 'add',
  },
  {
    label: '- Subtract',
    value: 'subtract',
  },
];

export default function UserDefinedFinalACForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const isNew = id === 'new';
  const [parentForm] = Form.useForm();
  const [childForm] = Form.useForm();

  const { submitRecord, deleteRecord, submitDetailRecord } = useUserDefinedFACQuery(false);

  const [detailInitialValues, setDetailInitialValues] = useState({ ...DEFAULT_CHILD });

  // Detail Form

  const onDetailChange = (name, value) => {
    const updated = { [name]: value };
    setDetailInitialValues({ ...detailInitialValues, ...updated });
  };

  const handleDetailSubmit = () => {};

  const onDetailSubmit = (values) => {
    dispatch(updatePageLoader(true));
    submitDetailRecord
      .mutateAsync(values)
      .then((response) => {
        handleDetailSubmit(
          response.data,
          values.detail_id ? FORM_SUBMIT_TYPES.update : FORM_SUBMIT_TYPES.save
        );
        dispatch(updatePageLoader(false));
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateDetailSubmit = (type) => {
    childForm
      .validateFields()
      .then((values) => {
        if (detailInitialValues.fromAccount.option === null)
          return toast.error('Please select from account');

        if (detailInitialValues.toAccount.option === null)
          return toast.error('Please select to account');

        values.voucher_id = id;
        values.from_account_id = detailInitialValues.fromAccount.option.value;
        values.to_account_id = detailInitialValues.toAccount.option.value;
        if (type === FORM_SUBMIT_TYPES.update && detailInitialValues.id)
          values.detail_id = detailInitialValues.id;
        onDetailSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  // Detail Form

  // Parent form

  const handleParentSubmit = (data) => {};

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

  const validateParentSubmit = () => {
    parentForm
      .validateFields()
      .then((values) => {
        values.post = values.post == true ? 1 : 0;
        if (!isNew) values.voucher_id = id;
        onParentSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const onDelete = () => {
    dispatch(updatePageLoader(true));
    deleteRecord
      .mutateAsync(id)
      .then(() => {
        dispatch(updatePageLoader(false));
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  // Parent form

  const resetPage = () => {};

  const loadData = (data) => {};

  const getDetails = (recordId) => {
    dispatch(updatePageLoader(true));
    getUserDefinedFA(recordId)
      .then((response) => {
        dispatch(updatePageLoader(false));
        loadData(response.data);
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
        navigate(FR_FAC);
      });
  };

  useEffect(() => {
    if (!isNew) getDetails(id);
    else resetPage();
  }, [id]);

  const buttons = [
    {
      label: 'New',
      onClick: resetPage,
    },
    {
      label: 'Delete',
      onClick: onDelete,
      disabled: isNew,
    },
  ];

  return (
    <>
      <SubHeader name={`${isNew ? 'Add' : 'Edit'} User Defined Final AC`} buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <ParentFormSection
            form={parentForm}
            initialValues={DEFAULT_PARENT}
            natures={natures}
            isNew={isNew}
            validateSubmit={validateParentSubmit}
          />

          <Divider />

          <DetailFormSection
            form={childForm}
            initialValues={detailInitialValues}
            natures={natures}
            sum_detail_options={sum_detail_options}
            symbol_options={symbol_options}
            onChange={onDetailChange}
            validateSubmit={validateDetailSubmit}
          />

          <DetailsListSection data={[]} onEdit={() => {}} onDelete={() => {}} />
        </Card>
      </div>
    </>
  );
}
