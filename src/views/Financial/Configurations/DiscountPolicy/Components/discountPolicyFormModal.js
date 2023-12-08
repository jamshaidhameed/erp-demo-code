import { Col, Form, Row } from 'antd';
import {
  DATE_FORMATE,
  DEFAULT_MSG,
  DEFAULT_AUTO_COMPLETE,
  INPUT_TYPES,
} from 'constants/shared/common';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useDiscountPolicyQuery } from 'services/api/actions/financial/configurations';
import { getDiscountPolicy } from 'services/api/actions/financial/configurations/discountPolicies/discountPolicies.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import SwitchField from 'shared/controls/inputs/switch';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';

const POLICY_LOCATION = [
  {
    label: 'All',
    value: 1,
  },
];

const DiscountPolicyFormModal = ({ open, onCancel, selected }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { submitRecord, invalidateList } = useDiscountPolicyQuery(false);
  const [minDate, setMinDate] = useState(null);
  const [glAccount, setGlAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const initialValues = {
    name: '',
    description: '',
    location_id: 1,
    discount_percentage: 0,
    active: 0,
    from_date: '',
    to_date: '',
  };

  const resetForm = () => {
    form.resetFields();
    setMinDate(null);
    setGlAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
  };

  const handleChangeAccount = (values) => {
    setGlAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const onSubmit = (values) => {
    dispatch(updatePageLoader(true));
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
        if (glAccount.option === null) return toast.error('Please select GL Account');

        values.from_date = dateTimeToString(new Date(values.from_date), DATE_FORMATE[9]);
        values.to_date = dateTimeToString(new Date(values.to_date), DATE_FORMATE[9]);
        values.active = values.active === true || values.active == 1 ? '1' : '0';
        values.gl_account_id = glAccount.option.value;
        if (selected) values.OID = selected.OID.toString();
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    const startDate = data.frmDate ? formReadableDT(data.frmDate) : null;
    const endDate = data.toDate ? formReadableDT(data.toDate) : null;
    form.setFields([
      { name: 'name', value: data.PolicyName },
      { name: 'description', value: data.PolicyDesc },
      { name: 'from_date', value: startDate },
      { name: 'to_date', value: endDate },
      { name: 'active', value: data.Active },
      { name: 'discount_percentage', value: data.DiscountPerc },
      { name: 'location_id', value: 1 },
    ]);
    setMinDate(startDate);
    setGlAccount({
      ...glAccount,
      defaultValue: data.GlAccountId,
    });
  };

  const getDetails = () => {
    getDiscountPolicy(selected?.OID)
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
    if (changedFields[0].name[0] === 'from_date') {
      const startVal = changedFields[0].value;
      const endVal = form.getFieldValue('to_date');
      setMinDate(startVal);
      if (startVal && endVal && startVal > endVal) form.setFieldValue('to_date', startVal);
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
      title={selected ? 'Edit Discount Policy' : 'Add Discount Policy'}
      width={700}
      okText="Submit"
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}>
      <FormElement
        name="voucherTypeForm"
        className="p-5"
        form={form}
        initialValues={initialValues}
        onFieldsChange={onFieldsChange}>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Policy Name"
              required
              type={INPUT_TYPES.text}
              name="name"
              messageLabel="policy name"
              placeholder="Enter policy name"
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Policy Description"
              required
              type={INPUT_TYPES.text}
              name="description"
              messageLabel="Policy description"
              placeholder="Enter policy description"
            />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <AccountAutoComplete
              value={glAccount}
              onChange={handleChangeAccount}
              label="Gl Account"
            />
          </Col>
          <Col span={11}>
            <SelectField
              label="Location"
              name="location_id"
              messageLabel="location"
              options={POLICY_LOCATION}
            />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Discount %"
              required
              type={INPUT_TYPES.amount}
              name="discount_percentage"
              messageLabel="discount"
              placeholder="Enter Discount"
              min={0}
              max={100}
            />
          </Col>
          <Col span={11}>
            <SwitchField label="Active" name="active" />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <DateTimeInput
              label="From Date"
              required
              name="from_date"
              messageLabel="start date"
              placeholder="Enter Start Date"
            />
          </Col>

          <Col span={11}>
            <DateTimeInput
              label="To Date"
              required
              name="to_date"
              messageLabel="end date"
              placeholder="Enter End Date"
              minDate={minDate}
            />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default DiscountPolicyFormModal;
