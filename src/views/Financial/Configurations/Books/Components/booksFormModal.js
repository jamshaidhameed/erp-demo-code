import { Col, Form, Row } from 'antd';
import VoucherTypeSelect from 'components/financial/voucherTypeSelect';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useConfigBooksQuery } from 'services/api/actions/financial/configurations';
import {
  getConfigBook,
  getBookCodeByVT,
} from 'services/api/actions/financial/configurations/books/books.api';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';

const BooksFormModal = ({ open, onCancel, selected }) => {
  const dispatch = useDispatch();
  const { addRecord, updateRecord, invalidateList } = useConfigBooksQuery();
  const [form] = Form.useForm();

  const [initialValues, setInitialValues] = useState({
    voucher_type: undefined,
    book_code: '',
    book_description: '',
  });

  const resetForm = () => {
    form.resetFields();
    form.setFieldValue('voucher_type', undefined);
    setInitialValues((prev) => ({ ...prev, voucher_type: undefined }));
  };

  const onSave = (values) => {
    dispatch(updatePageLoader(true));
    addRecord
      .mutateAsync(values)
      .then(() => {
        dispatch(updatePageLoader(false));
        onCancel();
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const onUpdate = (values) => {
    dispatch(updatePageLoader(true));
    updateRecord
      .mutateAsync({ ...values, book_id: selected.OID.toString() })
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
        values.voucher_type = values.voucher_type.toString();
        if (selected) onUpdate(values);
        else onSave(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const loadData = (data) => {
    setInitialValues((prev) => ({ ...prev, voucher_type: data.GL_VOUCHER_TYPES }));
    form.setFields([
      { name: 'voucher_type', value: data.GL_VOUCHER_TYPES },
      { name: 'book_code', value: data.ST_BOOK_CODE },
      { name: 'book_description', value: data.ST_BOOK_DESC },
    ]);
  };

  const getDetails = () => {
    getConfigBook(selected?.OID)
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

  const onVoucherTypeChange = async (val) => {
    setInitialValues({ ...initialValues, voucher_type: val?.OID ?? undefined });
    let code = '';

    if (val?.OID) {
      dispatch(updatePageLoader(true));
      await getBookCodeByVT(val?.OID)
        .then((response) => {
          dispatch(updatePageLoader(false));
          code = response.data;
        })
        .catch((error) => {
          dispatch(updatePageLoader(false));
          toast.error(parseError(error));
        });
    }

    form.setFieldValue('book_code', code);
  };

  useEffect(() => {
    if (open) {
      resetForm();
      if (selected) getDetails();
    }
  }, [open, selected]);

  return (
    <CustomModal
      title={selected ? 'Edit Book' : 'Add Book'}
      width={700}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement name="configBooksForm" className="p-5" form={form} initialValues={initialValues}>
        <Row align="middle" justify="space-between">
          <Col span={11}>
            <VoucherTypeSelect
              name="voucher_type"
              required
              disabled={!!selected}
              value={initialValues.voucher_type}
              onChange={onVoucherTypeChange}
            />
          </Col>

          <Col span={11}>
            <InputField
              label="Book Code"
              required
              disabled
              type={INPUT_TYPES.text}
              name="book_code"
              messageLabel="book code"
              placeholder="Enter book code"
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-between">
          <Col span={11}>
            <InputField
              label="Book Description"
              required
              type={INPUT_TYPES.text}
              name="book_description"
              messageLabel="book description"
              placeholder="Enter book description"
            />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default BooksFormModal;
