import { Col, Form, Row } from 'antd';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useVoucherTypesQuery } from 'services/api/actions/financial/configurations';
import { getVoucherType } from 'services/api/actions/financial/configurations/voucherTypes/voucherTypes.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const VOUCHER_SEQUENCE = [
  {
    label: 'Monthly',
    value: 'M',
  },
  {
    label: 'Yearly',
    value: 'Y',
  },
];

const BOOK_WISE_NO = [
  {
    label: 'Yes',
    value: 1,
  },
  {
    label: 'No',
    value: 0,
  },
];

const VoucherTypeFormModal = ({ open, onCancel, selected }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { addRecord, updateRecord, invalidateList } = useVoucherTypesQuery(false);

  const initialValues = {
    code: '',
    sequence: 'M',
    description: '',
    bookWiseNo: 0,
  };

  const resetForm = () => {
    form.resetFields();
  };

  const onSave = (values) => {
    dispatch(updatePageLoader(true));
    const { code, sequence, description, bookWiseNo } = values;

    const dataToSend = {
      code,
      sequence,
      description,
      number: bookWiseNo,
      post: 1,
    };
    selected ? handleUpdateVoucher(dataToSend) : handleAddVoucher(dataToSend);
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
        // toast.error(parseError(error));
      });
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
    const isValid = true;
    form
      .validateFields()
      .then((values) => {
        if (isValid) onSave(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    const {
      ST_VOUCHER_SEQUENCE,
      ST_VOUCHER_TYPE_CODE,
      ST_VOUCHER_TYPE_DESC,
      BOOK_WISE_NUMBERING,
      OID,
    } = data;

    form.setFields([
      { name: 'code', value: ST_VOUCHER_TYPE_CODE },
      { name: 'sequence', value: ST_VOUCHER_SEQUENCE },
      { name: 'description', value: ST_VOUCHER_TYPE_DESC },
      { name: 'bookWiseNo', value: BOOK_WISE_NUMBERING },
      { name: 'OID', value: OID },
    ]);
  };

  const getDetails = () => {
    getVoucherType(selected?.OID)
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
      title={selected ? 'Edit Voucher Type' : 'Add Voucher Type'}
      width={700}
      okText="Submit"
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}>
      <FormElement name="voucherTypeForm" className="p-5" form={form} initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Voucher Type Code"
              required
              type={INPUT_TYPES.text}
              name="code"
              messageLabel="voucher type code"
              placeholder="Enter voucher type code"
              inputLength={50}
              allowSc={false}
            />
          </Col>
          <Col span={11}>
            <InputField
              label="Voucher Type Description"
              required
              type={INPUT_TYPES.text}
              name="description"
              messageLabel="voucher type description"
              placeholder="Enter voucher type description"
              allowSc={false}
            />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <SelectField
              label="Voucher Sequence"
              name="sequence"
              messageLabel="sequence"
              options={VOUCHER_SEQUENCE}
            />
          </Col>
          <Col span={11}>
            <SelectField
              label="Bookwise No"
              name="bookWiseNo"
              messageLabel="email"
              required
              options={BOOK_WISE_NO}
              placeholder="Please select"
            />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default VoucherTypeFormModal;
