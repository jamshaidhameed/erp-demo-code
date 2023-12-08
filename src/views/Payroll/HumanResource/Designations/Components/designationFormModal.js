import { useEffect } from 'react';
import { Col, Form, Row } from 'antd';
import { FORM_NAMES } from 'constants/payroll';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import { useDispatch } from 'react-redux';
import { getHRDesignation } from '../../../../../services/api/actions/payroll/HumanResource/Designation/designation.api';
import { toast } from 'react-toastify';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const DesignationFormModal = ({ open, onCancel, selected, submitRecord, invalidateList }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const initialValues = {
    code: '',
    name: '',
    post: true,
  };

  const resetForm = () => {
    form.resetFields();
  };

  const onSubmit = (values) => {
    dispatch(updatePageLoader(true));
    const { post, ...data } = {
      ...values,
      status: values.post ? 1 : 0,
      ...(selected && { id: selected.id }),
    };
    data.status = post ? 1 : 0;
    submitRecord
      .mutateAsync(data)
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
      { name: 'code', value: data.code },
      { name: 'name', value: data.name },
      { name: 'post', value: data.status === 1 ? true : false },
    ]);
  };

  const getDetails = () => {
    getHRDesignation(selected?.id)
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
      title={selected ? 'Edit Designation' : 'Add Designation'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement
        name={FORM_NAMES.PR_HR_DESIGNATION_FORM}
        className="p-5"
        form={form}
        initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col lg={11}>
            <InputField
              label="Code"
              required
              type={INPUT_TYPES.number}
              name="code"
              messageLabel="code"
              placeholder="Enter code"
              inputLength={3}
              onlyNumbers
            />
          </Col>

          <Col span={11}>
            <InputField
              label="Name"
              required
              type={INPUT_TYPES.text}
              name="name"
              messageLabel="name"
              placeholder="Enter designation name"
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

export default DesignationFormModal;
