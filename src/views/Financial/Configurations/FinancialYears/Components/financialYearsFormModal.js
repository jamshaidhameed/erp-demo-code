import { Col, Form, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
// import SelectField from 'shared/controls/inputs/selectField';
import SwitchField from 'shared/controls/inputs/switch';
import { parseError } from 'utils/shared';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { getFinancialYear } from 'services/api/actions/financial/configurations/financialYears/financialYears.api';
import { useFinancialYearsQuery } from 'services/api/actions/financial/configurations';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import SelectField from 'shared/controls/inputs/selectField';
import {
  DATE_FORMATE,
  OPEN_CLOSE_OPTIONS,
  DEFAULT_MSG,
  INPUT_TYPES,
} from 'constants/shared/common';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';

const FinancialYearsFormModal = ({ open, onCancel, selected }) => {
  const dispatch = useDispatch();
  const { addRecord, updateRecord, invalidateList } = useFinancialYearsQuery();
  const [form] = Form.useForm();

  const [minDate, setMinDate] = useState(null);
  const initialValues = {
    year_code: '',
    year_desc: '',
    start_date: null,
    end_date: null,
    period_status: '1',
    status: true,
  };

  const resetForm = () => {
    form.resetFields();
    setMinDate(null);
  };

  const onSave = (values) => {
    dispatch(updatePageLoader(true));
    addRecord
      .mutateAsync(values)
      .then(() => {
        dispatch(updatePageLoader(false));
        onCancel();
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const onUpdate = (values) => {
    dispatch(updatePageLoader(true));
    updateRecord
      .mutateAsync({ ...values, financial_year_id: selected.OID.toString() })
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
        values.start_date = dateTimeToString(new Date(values.start_date), DATE_FORMATE[9]);
        values.end_date = dateTimeToString(new Date(values.end_date), DATE_FORMATE[9]);
        values.status = values.status === true || values.status == 1 ? '1' : '0';

        if (selected) onUpdate(values);
        else onSave(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    const startDate = data.FROM_DATE ? formReadableDT(data.FROM_DATE) : null;
    const endDate = data.TO_DATE ? formReadableDT(data.TO_DATE) : null;
    form.setFields([
      { name: 'year_code', value: data.ST_YEAR_CODE },
      { name: 'year_desc', value: data.ST_FIN_YEAR_DESC },
      { name: 'start_date', value: startDate },
      { name: 'end_date', value: endDate },
      { name: 'period_status', value: data.PeriodStatus.toString() },
      { name: 'status', value: data.status },
    ]);
    setMinDate(startDate);
  };

  const getDetails = () => {
    getFinancialYear(selected?.OID)
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

  const onFieldsChange = (changedFields, allFields) => {
    if (changedFields[0].name[0] === 'start_date') {
      const startVal = changedFields[0].value;
      const endVal = form.getFieldValue('end_date');
      setMinDate(startVal);
      if (startVal && endVal && startVal > endVal) form.setFieldValue('end_date', startVal);
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
      title={selected ? 'Edit Financial Year' : 'Add Financial Year'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      className="financial_year_modal"
      okText="Submit">
      <FormElement
        name="financialYearsForm"
        className="p-5"
        form={form}
        initialValues={initialValues}
        onFieldsChange={onFieldsChange}>
        <Row align="middle" justify="space-between">
          <Col xs={24} md={11}>
            <InputField
              label="Year"
              required
              autoFocus
              type={INPUT_TYPES.text}
              name="year_code"
              messageLabel="year"
              placeholder="Enter Year"
            />
          </Col>

          <Col xs={24} md={11}>
            <InputField
              label="Financial Year Description"
              required
              type={INPUT_TYPES.text}
              name="year_desc"
              messageLabel="financial year description"
              placeholder="Enter Financial Year Description"
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-between">
          <Col xs={24} md={11}>
            <DateTimeInput
              popupClassName="responsive_datepicker"
              label="Start Date"
              required
              name="start_date"
              messageLabel="start date"
              placeholder="Enter Start Date"
            />
          </Col>

          <Col xs={24} md={11}>
            <DateTimeInput
              popupClassName="responsive_datepicker"
              label="End Date"
              required
              name="end_date"
              messageLabel="end date"
              placeholder="Enter End Date"
              minDate={minDate}
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-between">
          <Col xs={24} md={11}>
            <SelectField
              name="period_status"
              label="Period Status"
              messageLabel="period status"
              options={OPEN_CLOSE_OPTIONS}
              required
            />
          </Col>

          <Col xs={24} md={11}>
            <SwitchField label="Active" name="status" />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default FinancialYearsFormModal;
