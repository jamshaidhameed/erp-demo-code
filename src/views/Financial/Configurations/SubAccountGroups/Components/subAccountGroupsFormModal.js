import { Col, Form, Row } from 'antd';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useSubAccountGroupsQuery } from 'services/api/actions/financial/configurations';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { getSubAccountGroup } from 'services/api/actions/financial/configurations/subAccountGroups/subAccountGroups.api';

const SubAccountGroupsFormModal = ({ open, onCancel, selected, nextCode }) => {
  const dispatch = useDispatch();
  const { addRecord, updateRecord, invalidateList } = useSubAccountGroupsQuery(false);

  const [form] = Form.useForm();

  const initialValues = {
    code: '',
    description: '',
    status: true,
  };

  const resetForm = () => {
    form.resetFields();
  };

  const onSave = (values) => {
    dispatch(updatePageLoader(true));
    selected ? editRecord(values) : addNewRecord(values);
  };

  const addNewRecord = (values) => {
    const dataToSend = {
      code: values.code,
      status: values.status === true || values.status == 1 ? 1 : 0,
      description: values.description,
    };
    addRecord
      .mutateAsync(dataToSend)
      .then(() => {
        dispatch(updatePageLoader(false));
        onCancel();
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const editRecord = (values) => {
    const dataToSend = {
      status: values.status === true || values.status == 1 ? 1 : 0,
      description: values.description,
      account_id: selected?.OID,
    };
    updateRecord
      .mutateAsync(dataToSend)
      .then(() => {
        dispatch(updatePageLoader(false));
        resetForm();
        onCancel();
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateSubmit = () => {
    const isValid = true;

    form
      .validateFields()
      .then((values) => {
        if (isValid) onSave(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    const { POST, ST_SUB_ACCOUNT_GROUP_CODE, ST_SUB_ACCOUNT_GROUP_DESC } = data;

    form.setFields([
      { name: 'code', value: ST_SUB_ACCOUNT_GROUP_CODE },
      { name: 'status', value: POST },
      { name: 'description', value: ST_SUB_ACCOUNT_GROUP_DESC },
    ]);
  };

  const getDetails = () => {
    getSubAccountGroup(selected?.OID)
      .then((response) => {
        dispatch(updatePageLoader(false));
        loadData(response?.data);
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
      } else {
        form.setFieldValue('code', nextCode);
      }
    }
  }, [open, selected]);

  return (
    <CustomModal
      title={selected ? 'Edit Sub Account Group' : 'Add Sub Account Group'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement name="login" className="p-5" form={form} initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Group Code"
              disabled
              required
              type={INPUT_TYPES.text}
              name="code"
              messageLabel="group code"
              placeholder="Enter group code"
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Group Description"
              type={INPUT_TYPES.text}
              name="description"
              placeholder="Enter group description"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <SwitchField label="Active" name="status" />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default memo(SubAccountGroupsFormModal);
