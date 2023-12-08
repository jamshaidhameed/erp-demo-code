import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { FORM_NAMES } from 'constants/payroll';
import {
  DATE_FORMATE,
  DEFAULT_AUTO_COMPLETE,
  DEFAULT_MSG,
  INPUT_TYPES,
} from 'constants/shared/common';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { getHREobi } from '../../../../../services/api/actions/payroll/HumanResource/Eobi/eobi.api';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';
import { useFinancialYearsQuery } from 'services/api/actions/financial/configurations';
import AutoCompleteInput from 'shared/controls/inputs/autoComplete';
// import AutoCompleteInput from 'shared/controls/inputs/autoComplete';

const BanksFormModal = ({ open, onCancel, selected, submitRecord, invalidateList }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [initialValues, setInitialValues] = useState({
    financial_year_description: '',
    start_date: null,
    end_date: null,
    minimum_salary: 0,
    employee_contribution: 0,
    employee_amount: 0,
    employer_contribution: 0,
    employer_amount: 0,
    post: true,
  });

  const [financialYear, setFinancialYear] = useState({ ...DEFAULT_AUTO_COMPLETE });

  const { getList: getFinancialYears } = useFinancialYearsQuery();
  const financialYearsList = getFinancialYears.isError
    ? []
    : getFinancialYears?.data?.map((item) => ({
        ...item,
        value: item.OID,
        label: item.OID.toString(),
      })) || [];

  const handleChangeFinancialYear = (values) => {
    setFinancialYear((prevState) => ({
      ...prevState,
      ...values,
    }));

    const findYear = financialYearsList?.find((item) => item.label === values.value);
    if (findYear) {
      const startDate = findYear.FROM_DATE ? formReadableDT(findYear.FROM_DATE) : null;
      const endDate = findYear.TO_DATE ? formReadableDT(findYear.TO_DATE) : null;
      form.setFields([
        { name: 'financial_year_description', value: findYear.ST_FIN_YEAR_DESC },
        { name: 'start_date', value: startDate },
        { name: 'end_date', value: endDate },
      ]);
    } else {
      form.setFields([
        { name: 'financial_year_description', value: '' },
        { name: 'start_date', value: null },
        { name: 'end_date', value: null },
      ]);
    }
  };

  const resetForm = () => {
    form.resetFields();
    setFinancialYear({ ...DEFAULT_AUTO_COMPLETE });
  };

  const onSubmit = (values) => {
    dispatch(updatePageLoader(true));
    values.post = values.post ? 1 : 0;
    values.financial_year_id = parseInt(financialYear.value);
    values.start_date = dateTimeToString(new Date(values.start_date), DATE_FORMATE[9]);
    values.end_date = dateTimeToString(new Date(values.end_date), DATE_FORMATE[9]);
    submitRecord
      .mutateAsync(values)
      .then(() => {
        dispatch(updatePageLoader(false));
        onCancel();
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        if (selected) values.eobi_id = selected.id;
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    const startDate = data.start_date ? formReadableDT(data.start_date) : null;
    const endDate = data.end_date ? formReadableDT(data.end_date) : null;
    form.setFields([
      { name: 'financial_year_description', value: data.financial_year_description },
      { name: 'start_date', value: startDate },
      { name: 'end_date', value: endDate },
      { name: 'minimum_salary', value: data.minimum_salary },
      { name: 'employee_contribution', value: data.employee_contribution },
      { name: 'employee_amount', value: data.employee_amount },
      { name: 'employer_contribution', value: data.employer_contribution },
      { name: 'employer_amount', value: data.employer_amount },
      { name: 'post', value: data.post === 1 ? true : false },
    ]);

    setFinancialYear((prev) => ({
      ...prev,
      defaultValue: data.financial_year_id,
    }));
  };

  const getDetails = () => {
    getHREobi(selected?.id)
      .then((response) => {
        dispatch(updatePageLoader(false));
        loadData(response.data);
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
        invalidateList();
        onCancel();
      });
  };

  const handleChangeSalary = (value) => {
    setInitialValues({ ...initialValues, minimum_salary: value });
  };

  const handleEmployeeContribution = (value) => {
    if (value < 100) {
      const employeeAmount = (initialValues.minimum_salary / 100) * value;
      form.setFieldValue('employee_amount', employeeAmount);
    }
  };

  const handleEmployerContribution = (value) => {
    if (value < 100) {
      const employerAmount = (initialValues.minimum_salary / 100) * value;
      form.setFieldValue('employer_amount', employerAmount);
    }
  };

  useEffect(() => {
    if (open) {
      resetForm();
      if (selected) getDetails();
    }
  }, [open, selected]);

  return (
    <CustomModal
      title={selected ? 'Edit EOBI' : 'Add EOBI'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement
        name={FORM_NAMES.PR_HR_EOBI_FORM}
        className="p-5"
        form={form}
        initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col lg={11}>
            <AutoCompleteInput
              label="Financial Year Id"
              options={financialYearsList}
              loading={getFinancialYears.isLoading}
              controlled
              onChange={handleChangeFinancialYear}
              messageLabel="financial year id"
              required={true}
              value={financialYear?.value ?? ''}
              selectedOption={financialYear?.option ?? null}
              defaultValue={financialYear?.defaultValue ?? ''}
            />
            {/* <InputField
              label="Financial Year Id"
              required
              type={INPUT_TYPES.text}
              name="financial_year_id"
              messageLabel="financial year id"
              placeholder="Enter financial year id"
              onlyNumbers
            /> */}
          </Col>

          <Col span={11}>
            <InputField
              label="Financial Year Description"
              type={INPUT_TYPES.text}
              disabled
              // required
              // messageLabel="financial year description"
              name="financial_year_description"
              placeholder="Enter description"
            />
          </Col>
          <Col span={11}>
            <DateTimeInput
              popupClassName="responsive_datepicker"
              label="Financial Start Date"
              // required
              // messageLabel="start date"
              disabled
              name="start_date"
              placeholder="Enter Start Date"
            />
          </Col>
          <Col span={11}>
            <DateTimeInput
              popupClassName="responsive_datepicker"
              label="Financial End Date"
              // required
              // messageLabel="end date"
              disabled
              name="end_date"
              placeholder="Enter End Date"
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Minimum Salary"
              type={INPUT_TYPES.number}
              controlled
              required
              messageLabel="minimum salary"
              onChange={handleChangeSalary}
              name="minimum_salary"
              placeholder="Enter minimum salary"
              onlyNumbers
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Employee Contribution (%)"
              // required
              // messageLabel="employee contribution"
              type={INPUT_TYPES.number}
              disabled={!initialValues.minimum_salary}
              controlled
              onChange={handleEmployeeContribution}
              name="employee_contribution"
              placeholder="Enter employee contribution"
              inputLength={2}
              onlyNumbers
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Employee Amount"
              // required
              // messageLabel="employee amount"
              type={INPUT_TYPES.number}
              disabled
              name="employee_amount"
              placeholder="Enter employee amount"
              onlyNumbers
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Employer Contribution (%)"
              // required
              // messageLabel="employer contribution"
              type={INPUT_TYPES.number}
              disabled={!initialValues.minimum_salary}
              controlled
              onChange={handleEmployerContribution}
              name="employer_contribution"
              placeholder="Enter employer contribution"
              inputLength={2}
              onlyNumbers
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Employer Amount"
              // required
              // messageLabel="employer amount"
              type={INPUT_TYPES.number}
              disabled
              name="employer_amount"
              placeholder="Enter employer amount"
              onlyNumbers
            />
          </Col>

          <Col span={11}>
            <SwitchField label="Post" name="post" />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default BanksFormModal;
