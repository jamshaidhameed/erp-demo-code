import { Col, Form, Row } from 'antd';
import { FORM_NAMES } from 'constants/payroll';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getHREmployeeCategory } from 'services/api/actions/payroll/HumanResource/employeeCategories/employeeCategories.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { tryParseInt } from 'utils/shared/numbers';
import { padZeros } from 'utils/shared/strings';

const EmployeeCategoriesFormModal = ({
  open,
  onCancel,
  selected,
  submitRecord,
  invalidateList,
  code_length,
  currentCode,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const initialValues = {
    code: '',
    description: '',
    post: true,
  };

  const resetForm = () => {
    form.resetFields();
    form.setFieldValue('code', currentCode);
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
        if (tryParseInt(values.code) === 0) return toast.error("Employee Category Can't be 0");
        values.code = padZeros(values.code, code_length);
        values.post = values.post === true || values.post == 1 ? '1' : '0';
        if (selected) values.id = selected.id;
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    form.setFields([
      { name: 'code', value: data.code },
      { name: 'description', value: data.description },
      { name: 'post', value: data.post },
    ]);
  };

  const getDetails = () => {
    getHREmployeeCategory(selected?.id)
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
  }, [open, selected, currentCode]);

  return (
    <CustomModal
      title={selected ? 'Edit Employee Category' : 'Add Employee Category'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement
        name={FORM_NAMES.PR_HR_EMPLOYEE_CATEGORY_FORM}
        className="p-5"
        form={form}
        initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col lg={11}>
            <InputField
              label="Employee Category"
              required
              type={INPUT_TYPES.text}
              name="code"
              messageLabel="employee category"
              placeholder="Enter employee category"
              inputLength={code_length}
              onlyNumbers
            />
          </Col>

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
            <SwitchField label="Active" name="post" />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default EmployeeCategoriesFormModal;
