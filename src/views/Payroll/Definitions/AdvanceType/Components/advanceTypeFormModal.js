import { Col, Form, Row } from 'antd';
import { FORM_NAMES } from 'constants/payroll';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getDefinitionsAdvanceType } from 'services/api/actions/payroll/definitions/advanceTypes/advanceTypes.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const AdvanceTypeFormModal = ({ open, onCancel, selected, submitRecord, invalidateList }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const initialValues = {
    description: '',
    short_description: '',
    min_month: '',
    post: true,
  };

  const resetForm = () => {
    form.resetFields();
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
        values.post = values.post === true || values.post == 1 ? '1' : '0';
        if (selected) values.id = selected.id;
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    form.setFields([
      { name: 'description', value: data.description },
      { name: 'short_description', value: data.short_description },
      { name: 'min_month', value: data.min_month },
      { name: 'post', value: data.post === '1' ? true : false },
    ]);
  };

  const getDetails = () => {
    getDefinitionsAdvanceType(selected?.id)
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
      title={selected ? 'Edit Advance Type' : 'Add Advance Type'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement
        name={FORM_NAMES.PR_DEFINITIONS_ADVANCE_TYPE_FORM}
        className="p-5"
        form={form}
        initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Description"
              required
              type={INPUT_TYPES.text}
              name="description"
              messageLabel="description"
              placeholder="Enter description"
            />
          </Col>

          <Col span={11}>
            <InputField
              label="Short Description"
              required
              type={INPUT_TYPES.text}
              name="short_description"
              messageLabel="short description"
              placeholder="Enter short description"
            />
          </Col>

          <Col span={11}>
            <InputField
              label="Min. Service Month"
              required
              type={INPUT_TYPES.number}
              name="min_month"
              messageLabel="Min. Service Month"
              placeholder="Enter Min. Service Month"
              onlyNumbers
              min={0}
              max={12}
            />
          </Col>

          <Col span={11}>
            <SwitchField label="Active" name="post" />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default AdvanceTypeFormModal;
