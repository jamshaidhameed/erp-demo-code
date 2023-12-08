import { Col, Form, Row } from 'antd';
import { FORM_NAMES } from 'constants/payroll';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getHRLocation } from 'services/api/actions/payroll/HumanResource/locations/locations.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const natures = [
  {
    label: 'Debit',
    value: 'D',
  },
  {
    label: 'Credit',
    value: 'C',
  },
];

const LocationsFormModal = ({ open, onCancel, selected, submitRecord, invalidateList }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const initialValues = {
    code: '',
    description: '',
    headOffice: undefined,
    branchCode: undefined,
    deptCode: undefined,
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
        if (selected) values.id = selected.OID;
        onSubmit(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    form.setFields([
      { name: 'code', value: data.code },
      { name: 'description', value: data.description },
      { name: 'headOffice', value: data.headOffice },
      { name: 'branchCode', value: data.branchCode },
      { name: 'deptCode', value: data.deptCode },
      { name: 'post', value: data.post },
    ]);
  };

  const getDetails = () => {
    getHRLocation(selected?.OID)
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
      title={selected ? 'Edit Location' : 'Add Location'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement
        name={FORM_NAMES.PR_HR_LOCATION_FORM}
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
              label="Location Description"
              required
              type={INPUT_TYPES.text}
              name="description"
              messageLabel="description"
              placeholder="Enter description"
            />
          </Col>

          <Col span={11}>
            <SelectField
              label="Head Office / Branch"
              name="headOffice"
              messageLabel="head office"
              options={natures}
              placeholder="Select"
              required
            />
          </Col>

          <Col span={11}>
            <SelectField
              label="Branch Code"
              name="branchCode"
              messageLabel="branch code"
              options={natures}
              placeholder="Select"
              required
            />
          </Col>

          <Col span={11}>
            <SelectField
              label="Dept Code"
              name="deptCode"
              messageLabel="dept code"
              options={natures}
              placeholder="Select"
              required
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

export default LocationsFormModal;
