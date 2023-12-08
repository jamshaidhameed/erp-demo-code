import { useEffect } from 'react';
import { Col, Form, Row } from 'antd';
import { FORM_NAMES } from 'constants/payroll';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import { useDispatch } from 'react-redux';
import { getHRBank } from '../../../../../services/api/actions/payroll/HumanResource/Bank/bank.api';
import { toast } from 'react-toastify';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const BanksFormModal = ({ open, onCancel, selected, submitRecord, invalidateList }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const initialValues = {
    code: '',
    bankName: '',
    abbreviation: '',
    post: true,
  };

  const resetForm = () => {
    form.resetFields();
  };

  const onSubmit = (values) => {
    dispatch(updatePageLoader(true));
    const { code, bankName, abbreviation, post } = values;
    const dataToSend = {
      bank_code: parseInt(code),
      bank_name: bankName,
      bank_short_name: abbreviation,
      post: post ? 1 : 0,
    };

    if (selected) dataToSend.id = selected.id;
    submitRecord
      .mutateAsync(dataToSend)
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
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    form.setFields([
      { name: 'code', value: data.bank_code },
      { name: 'bankName', value: data.bank_name },
      { name: 'abbreviation', value: data.bank_short_name },
      { name: 'post', value: data.post === 1 ? true : false },
    ]);
  };

  const getDetails = () => {
    getHRBank(selected?.id)
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
      if (selected) getDetails();
    }
  }, [open, selected]);

  return (
    <CustomModal
      title={selected ? 'Edit Bank' : 'Add Bank'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement
        name={FORM_NAMES.PR_HR_BANK_FORM}
        className="p-5"
        form={form}
        initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col lg={11}>
            <InputField
              label="Code"
              required
              type={INPUT_TYPES.text}
              name="code"
              messageLabel="code"
              placeholder="Enter code"
              onlyNumbers
            />
          </Col>

          <Col span={11}>
            <InputField
              label="Bank Name"
              required
              type={INPUT_TYPES.text}
              name="bankName"
              messageLabel="bank name"
              placeholder="Enter bank name"
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Abbreviation"
              type={INPUT_TYPES.text}
              name="abbreviation"
              messageLabel="abbreviation"
              placeholder="Enter abbreviation"
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
