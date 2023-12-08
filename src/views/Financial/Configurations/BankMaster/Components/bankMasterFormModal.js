import { Col, Form, Row } from 'antd';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import { DEFAULT_MSG, DEFAULT_AUTO_COMPLETE, INPUT_TYPES } from 'constants/shared/common';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useBankMasterQuery } from 'services/api/actions/financial/configurations';
import { getBankMaster } from 'services/api/actions/financial/configurations/bankMaster/bankMaster.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const locations = [
  {
    label: 'All',
    value: 0,
  },
];

const BankMasterFormModal = ({ open, onCancel, selected }) => {
  const [glAccount, setGlAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const initialValues = {
    bankname: '',
    bankaccount: null,
    branchname: '',
    bankaddress: '',
    active: false,
    location_id: 0,
  };

  const { submitRecord, invalidateList } = useBankMasterQuery(false);

  const handleLocation = (e) => {};

  const resetForm = () => {
    setGlAccount((prev) => ({
      ...prev,
      ...DEFAULT_AUTO_COMPLETE,
    }));
    form.resetFields();
  };

  const handleChangeAccount = (values) => {
    setGlAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const onSave = (values) => {
    values.active = values.active === true || values.active == 1 ? 1 : 0;
    values.GI_Account_id = glAccount.option?.value;
    if (selected) {
      values.OID = selected?.OID;
    }
    handleSubmit(values);
  };

  const handleSubmit = (data) => {
    submitRecord
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

  // Edit existing Bank Master
  // const handleUpdateVoucher = (data) => {
  //   updateRecord
  //     .mutateAsync({ ...data, OID: selected?.OID })
  //     .then((response) => {
  //       dispatch(updatePageLoader(false));
  //       resetForm();
  //       onCancel();
  //     })
  //     .catch((error) => {
  //       dispatch(updatePageLoader(false));
  //       toast.error(parseError(error));
  //     });
  // };

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
          onSave(values);
        }
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    const { BankName, BankAccountNo, BranchName, BranchAddress, Active, LocationId, GlAccountId } =
      data;

    setGlAccount({
      ...glAccount,
      defaultValue: GlAccountId,
    });

    form.setFields([
      { name: 'bankname', value: BankName },
      { name: 'bankaccount', value: BankAccountNo },
      { name: 'branchname', value: BranchName },
      { name: 'bankaddress', value: BranchAddress },
      { name: 'active', value: Active == 1 ? true : false },
      { name: 'location_id', value: LocationId },
    ]);
  };

  const getDetails = () => {
    getBankMaster(selected?.OID)
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
      title={selected ? 'Edit Bank Master' : 'Add Bank Master'}
      width={700}
      okText="Submit"
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}>
      <FormElement name="voucherTypeForm" className="p-5" form={form} initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Bank Name"
              required
              type={INPUT_TYPES.text}
              name="bankname"
              messageLabel="bank name"
              placeholder="Enter bank name"
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Bank Account No"
              required
              type={INPUT_TYPES.text}
              name="bankaccount"
              messageLabel="bank account no."
              placeholder="Enter bank account no."
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Branch Name"
              required
              type={INPUT_TYPES.text}
              name="branchname"
              messageLabel="branch name"
              placeholder="Enter branch name"
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Branch Address"
              required
              type={INPUT_TYPES.text}
              name="bankaddress"
              messageLabel="branch address"
              placeholder="Enter branch address"
            />
          </Col>
          <Col span={11}>
            <SelectField
              label="Location"
              className="subheader_locations"
              placeholder="Select location"
              onChange={handleLocation}
              name="location_id"
              controlled={false}
              options={locations}
            />
          </Col>
          <Col span={11}>
            <AccountAutoComplete
              value={glAccount}
              onChange={handleChangeAccount}
              label="Gl Account"
              messageLabel="Gl Account"
              placeholder="Search Gl Account"
            />
          </Col>
          <Col span={11}>
            <SwitchField label="Active" name="active" parentClassName="bank_master_active" />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default BankMasterFormModal;
