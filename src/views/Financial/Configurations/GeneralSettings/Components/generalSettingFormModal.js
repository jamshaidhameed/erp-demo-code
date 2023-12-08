import { Col, Form, Row } from 'antd';
import { DEFAULT_MSG, DEFAULT_AUTO_COMPLETE } from 'constants/shared/common';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useGeneralSettingQuery } from 'services/api/actions/financial/configurations';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import { getGeneralSetting } from 'services/api/actions/financial/configurations/generalSetting/generalSetting.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import SwitchField from 'shared/controls/inputs/switch';

const GeneralSettingFormModal = ({ open, onCancel, selected }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { submitRecord, invalidateList } = useGeneralSettingQuery(false);
  const [frAccount, setFrAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [micAccount, setMicAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [secAccount, setSecAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [inAccount, setInAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [gstAccount, setGstAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [whtAccount, setWhtAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [whtGstAccount, setWhtGstAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [praAccount, setPraAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [caAccount, setCaAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });

  const initialValues = {
    freight_account: '',
    misc_account: '',
    security_account: '',
    inventory_variance: '',
    gst_input: '',
    wht_input: '',
    wht_gst_account: '',
    pra_account: '',
    commission_account: '',
    active: '',
  };

  const resetForm = () => {
    form.resetFields();
    setFrAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setMicAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setSecAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setInAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setGstAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setWhtAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setWhtGstAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setPraAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    setCaAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
  };

  const handleChangeAccount = (values) => {
    setFrAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleMicAccount = (values) => {
    setMicAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleSecAccount = (values) => {
    setSecAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleInAccount = (values) => {
    setInAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleGstAccount = (values) => {
    setGstAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleWhtAccount = (values) => {
    setWhtAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleWhtGstAccount = (values) => {
    setWhtGstAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handlePraAccount = (values) => {
    setPraAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleCaAccount = (values) => {
    setCaAccount((prevState) => ({
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
        if (frAccount.option === null) return toast.error('Please select Freight Account');
        if (micAccount.option === null) return toast.error('Please select Misc. Account');
        if (secAccount.option === null) return toast.error('Please select Security Account');
        if (inAccount.option === null) return toast.error('Please select Inventory Variance A/C');
        if (gstAccount.option === null) return toast.error('Please select GST Input');
        if (whtAccount.option === null) return toast.error('Please select WHT Input');
        if (whtGstAccount.option === null) return toast.error('Please select WHT-GST Account');
        if (praAccount.option === null) return toast.error('Please select PRA Account');
        if (caAccount.option === null) return toast.error('Please select Commission Account');

        // values.active = values.active === true || values.active == 1 ? '1' : '0';
        values.freight_account_id = frAccount.option.value;
        values.misct_account_id = micAccount.option.value;
        values.security_account_id = secAccount.option.value;
        values.inv_variance_account_id = inAccount.option.value;
        values.gst_input_account_id = gstAccount.option.value;
        values.wht_input_account_id = whtAccount.option.value;
        values.whtgst_account_id = whtGstAccount.option.value;
        values.pra_account_id = praAccount.option.value;
        values.commission_account_id = caAccount.option.value;
        values.auto_srn = values.active === true || values.active == 1 ? '1' : '0';
        if (selected) values.general_setting_id = selected.OID;

        delete values.active;
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    form.setFields([
      { name: 'freight_account', value: data.FreightAccountDesc },
      { name: 'misc_account', value: data.MisctAccountDesc },
      { name: 'security_account', value: data.SecurityAccountDesc },
      { name: 'inventory_variance', value: data.InvVarianceAccountDesc },
      { name: 'gst_input', value: data.InvVarianceAccountDesc },
      { name: 'wht_input', value: data.GstInputAccountDesc },
      { name: 'wht_gst_account', value: data.WhtInputAccountDesc },
      { name: 'pra_account', value: data.PRAAccountDesc },
      { name: 'commission_account', value: data.CommissionAccountDesc },
      { name: 'active', value: data.autoSRN },
    ]);
    setFrAccount({
      ...frAccount,
      defaultValue: data.FreightAccountId,
    });
    setMicAccount({
      ...micAccount,
      defaultValue: data.MisctAccountId,
    });
    setSecAccount({
      ...secAccount,
      defaultValue: data.SecurityAccountId,
    });
    setInAccount({
      ...inAccount,
      defaultValue: data.InvVarianceAccountId,
    });
    setGstAccount({
      ...gstAccount,
      defaultValue: data.GstInputAccountId,
    });
    setWhtAccount({
      ...whtAccount,
      defaultValue: data.WhtInputAccountId,
    });
    setWhtGstAccount({
      ...whtGstAccount,
      defaultValue: data.WHTGSTAccountId,
    });
    setPraAccount({
      ...praAccount,
      defaultValue: data.PRAAccountId,
    });
    setCaAccount({
      ...caAccount,
      defaultValue: data.CommissionAccountId,
    });
  };

  const getDetails = () => {
    getGeneralSetting(selected?.OID)
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
      title={selected ? 'Edit General Setting' : 'Add General Setting'}
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
            <AccountAutoComplete
              placeholder="Search Freight Account"
              value={frAccount}
              onChange={handleChangeAccount}
              label="Freight Account"
            />
          </Col>
          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search Misc. Account"
              value={micAccount}
              onChange={handleMicAccount}
              label="Misc. Account"
            />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search Security Account"
              value={secAccount}
              onChange={handleSecAccount}
              label="Security Account"
            />
          </Col>

          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search Inventory Variance A/C"
              value={inAccount}
              onChange={handleInAccount}
              label="Inventory Variance A/C"
            />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search GST Input"
              value={gstAccount}
              onChange={handleGstAccount}
              label="GST Input"
            />
          </Col>
          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search WHT Input"
              value={whtAccount}
              onChange={handleWhtAccount}
              label="WHT Input"
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-between">
          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search WHT-GST Account"
              value={whtGstAccount}
              onChange={handleWhtGstAccount}
              label="WHT-GST Account"
            />
          </Col>

          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search PRA Account"
              value={praAccount}
              onChange={handlePraAccount}
              label="PRA Account"
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-between">
          <Col span={11}>
            <AccountAutoComplete
              placeholder="Search Commission Account"
              value={caAccount}
              onChange={handleCaAccount}
              label="Commission Account"
            />
          </Col>
          <Col span={11}>
            <SwitchField label="Active" name="active" />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default GeneralSettingFormModal;
