import SubHeader from 'shared/layout/subHeader';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { HR_EG } from 'router/routes/payrollRoutes';
import { parseError } from 'utils/shared';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';
import { getHRExecutiveGrade } from 'services/api/actions/payroll/HumanResource/executiveGrades/executiveGrades.api';
import Card from 'shared/components/card';
import { Form } from 'antd';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useHRExecutiveGradesQuery } from 'services/api/actions/payroll/HumanResource';
import { tryParseFloat } from 'utils/shared/numbers';
import ParentFormSection from './parentFormSection';
import DetailFormSection from './detailFormSection';
import ListSection from './listSection';

const parentDefault = {
  id: '',
  code: '',
  name: '',
  employeeType: undefined,
  employeeCategory: undefined,
  post: true,
};

export default function ExecutiveGradeForm({ id }) {
  const code_length = 2;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNew = id === 'new';
  const [parentForm] = Form.useForm();
  const [childForm] = Form.useForm();

  const detailInitialValues = {
    id: '',
    annualBasic: '',
    amount: '',
  };

  const { submitRecord } = useHRExecutiveGradesQuery(false);

  const [
    detailList,
    // setDetailList
  ] = useState([]);
  const [
    parentInitialValues,
    // setParentInitialValues
  ] = useState({ ...parentDefault });

  // Parent's functions
  const onParentSubmit = (values) => {
    dispatch(updatePageLoader(true));
    submitRecord
      .mutateAsync(values)
      .then((response) => {
        dispatch(updatePageLoader(false));
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateParentSubmit = () => {
    parentForm
      .validateFields()
      .then((values) => {
        if (parentInitialValues.id) values.id = parentInitialValues.id;
        onParentSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };
  // Parent's functions

  // Detail's Functions
  const onDetailSubmit = (values) => {};

  const validateDetailSubmit = (type) => {
    childForm
      .validateFields()
      .then((values) => {
        values.amount = tryParseFloat(values.amount);
        if (detailInitialValues.id) values.id = detailInitialValues.id;
        onDetailSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };
  // Detail's Functions

  const resetForm = () => {};

  const loadData = (data) => {};

  const getDetails = (recordId) => {
    dispatch(updatePageLoader(true));
    getHRExecutiveGrade(recordId)
      .then((response) => {
        dispatch(updatePageLoader(false));
        loadData(response.data);
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
        navigate(HR_EG);
      });
  };

  useEffect(() => {
    if (!isNew) getDetails(id);
    else resetForm();
  }, [id]);

  return (
    <>
      <SubHeader name={`${isNew ? 'Add' : 'Edit'} Executive Grade`} />
      <div className="app_page_content app_page_tab_content">
        <Card>
          <ParentFormSection
            form={parentForm}
            initialValues={parentInitialValues}
            code_length={code_length}
            validateSubmit={validateParentSubmit}
          />

          <DetailFormSection
            form={childForm}
            initialValues={detailInitialValues}
            validateSubmit={validateDetailSubmit}
          />

          <ListSection data={detailList} />
        </Card>
      </div>
    </>
  );
}
