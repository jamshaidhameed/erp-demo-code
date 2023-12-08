import SubHeader from 'shared/layout/subHeader';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { parseError } from 'utils/shared';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';
import Card from 'shared/components/card';
import { Form } from 'antd';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useHREmployeeBasicInfoQuery } from 'services/api/actions/payroll/HumanResource';
import BasicInfoFormSection from './basicInfoFormSection';
import ContactInfoFormSection from './contactInfoFormSection';
import { getHREmployeeBasicInfo } from 'services/api/actions/payroll/HumanResource/employeeBasicInfo/employeeBasicInfo.api';
import FormElement from 'shared/controls/form';
import { FORM_NAMES } from 'constants/payroll';

const ADDRESS_TYPES = [
  {
    label: 'Permanent',
    value: '1',
  },
];

const GENDERS_LIST = [
  {
    label: 'Male',
    value: '1',
  },
  {
    label: 'Female',
    value: '2',
  },
];

const MARITAL_STATUS_LIST = [
  {
    label: 'Single',
    value: '1',
  },
  {
    label: 'Married',
    value: '2',
  },
];

const defaultValues = {
  id: '',
  code: '',
  titles: '',
  initials: '',
  firstName: '',
  middleName: '',
  lastName: '',
  fatherName: '',
  dob: null,
  nic: '',
  ntn: '',
  city: undefined,
  bank: undefined,
  bankBranch: '',
  branchName: '',
  accountNo: '',
  location: '',
  department: undefined,
  jobTitle: undefined,
  executiveGrade: undefined,
  employeeType: undefined,
  employeeCategory: undefined,
  addressType: ADDRESS_TYPES[0].value,
  address: '',
  religion: undefined,
  nationality: undefined,
  gender: undefined,
  maritalStatus: undefined,
  doj: null,
  dateConfirmed: null,
  probationDays: '',
  probationEndDate: undefined,
  reportedTo: '',
  companyBank: undefined,
  companyBankBranch: '',
  companyBranchName: '',
  post: false,
  contractDays: '',
  contractMonths: '',
  contractYears: '',
  contractEndDate: null,
  leaveEntitlement: '',
  leaveAvailed: '',
  medicalEntitlement: '',
  medicalClaimed: '',
  lwpDays: '',
  graduatyPropDays: '',
};

export default function EmployeeBasicInfoForm({ id }) {
  const dispatch = useDispatch();
  const isNew = id === 'new';
  const [form] = Form.useForm();

  const { submitRecord } = useHREmployeeBasicInfoQuery(false);

  const [
    initialValues,
    // setInitialValues
  ] = useState({ ...defaultValues });

  const onSubmit = (values) => {
    dispatch(updatePageLoader(true));
    submitRecord
      .mutateAsync(values)
      .then((response) => {
        dispatch(updatePageLoader(false));
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        if (initialValues.id) values.id = initialValues.id;
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const resetForm = () => {};

  const loadData = (data) => {};

  const getDetails = (recordId) => {
    dispatch(updatePageLoader(true));
    getHREmployeeBasicInfo(recordId)
      .then((response) => {
        dispatch(updatePageLoader(false));
        loadData(response.data);
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
        // navigate(HR_EG);
      });
  };

  useEffect(() => {
    if (!isNew) getDetails(id);
    else resetForm();
  }, [id]);

  const buttons = [
    {
      label: initialValues.id ? 'Update' : 'Save',
      onClick: validateSubmit,
    },
  ];

  return (
    <>
      <SubHeader name={`${isNew ? 'Add' : 'Edit'} Employee Basic Info`} buttons={buttons} />

      <div className="app_page_content app_page_tab_content">
        <Card>
          <FormElement
            name={FORM_NAMES.PR_HR_EBI_FORM}
            initialValues={initialValues}
            className="p-5"
            form={form}>
            <BasicInfoFormSection
              ADDRESS_TYPES={ADDRESS_TYPES}
              GENDERS_LIST={GENDERS_LIST}
              MARITAL_STATUS_LIST={MARITAL_STATUS_LIST}
            />

            <ContactInfoFormSection />
          </FormElement>
        </Card>
      </div>
    </>
  );
}
