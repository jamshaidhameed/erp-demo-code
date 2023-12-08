import { Col, Form, Row } from 'antd';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import { DEFAULT_MSG, DEFAULT_AUTO_COMPLETE, INPUT_TYPES } from 'constants/shared/common';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCashMasterQuery } from 'services/api/actions/financial/configurations';
import { getCashMaster } from 'services/api/actions/financial/configurations/cashMaster/cashMaster.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const CashMasterFormModal = ({ open, onCancel, selected }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { addRecord, updateRecord, invalidateList } = useCashMasterQuery(false);
  const [glAccount, setGlAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });

  const initialValues = {
    account_name: '',
    account_description: '',
    // gl_account_id: '',
  };

  const resetForm = () => {
    setGlAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    form.resetFields();
  };

  const onSave = (values) => {
    dispatch(updatePageLoader(true));
    // const { code, sequence, description, bookWiseNo } = values;

    selected ? handleUpdateVoucher(values) : handleAddVoucher(values);
  };

  // Add new Voucher Type
  const handleAddVoucher = (data) => {
    addRecord
      .mutateAsync(data)
      .then(() => {
        dispatch(updatePageLoader(false));
        resetForm();
        onCancel();
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
      });
  };

  const handleChangeAccount = (values) => {
    setGlAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  // Edit existing Voucher Type
  const handleUpdateVoucher = (data) => {
    updateRecord
      .mutateAsync({ ...data, OID: selected?.OID })
      .then((response) => {
        dispatch(updatePageLoader(false));
        resetForm();
        onCancel();
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
      });
  };

  const validateSubmit = () => {
    let isValid = true;
    if (!glAccount.option?.value) {
      toast.error('Please select GL Account');
      isValid = false;
    }
    form
      .validateFields()
      .then((values) => {
        if (isValid) {
          values.gl_account_id = glAccount.option?.value;
          onSave(values);
        }
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    const { AccountName, AccountDesc, GlAccountId } = data;
    setGlAccount({
      ...glAccount,
      defaultValue: GlAccountId,
    });
    form.setFields([
      { name: 'account_name', value: AccountName },
      { name: 'account_description', value: AccountDesc },
      // { name: 'gl_account_id', value: GlAccountId },
    ]);
  };

  const getDetails = () => {
    getCashMaster(selected?.OID)
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

  useEffect(() => {
    if (open) {
      resetForm();
      if (selected) {
        getDetails();
      }
    }
  }, [open, selected]);

  return (
    <CustomModal
      title={selected ? 'Edit Cash Master' : 'Add Cash Master'}
      width={700}
      okText="Submit"
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}>
      <FormElement name="cashMasterForm" className="p-5" form={form} initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Cash Account Name"
              required
              type={INPUT_TYPES.text}
              name="account_name"
              messageLabel="cash account name"
              placeholder="Enter cash account name"
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Description"
              required
              type={INPUT_TYPES.text}
              name="account_description"
              messageLabel="description"
              placeholder="Enter description"
            />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <AccountAutoComplete value={glAccount} onChange={handleChangeAccount} />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default CashMasterFormModal;
