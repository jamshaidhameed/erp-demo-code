import { Col, Form, Row } from 'antd';
import { DEFAULT_MSG, INPUT_TYPES } from 'constants/shared/common';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useChequeFormatQuery } from 'services/api/actions/financial/configurations';
import CustomModal from 'shared/components/CustomModal';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { getChequeFormat } from 'services/api/actions/financial/configurations/chequeFormat/chequeFormat.api';
import SwitchField from 'shared/controls/inputs/switch';

const ChequeFormatFormModal = ({ open, onCancel, selected }) => {
  const dispatch = useDispatch();
  const { addRecord, invalidateList, updateRecord } = useChequeFormatQuery(false);

  const [form] = Form.useForm();

  const initialValues = {
    cheque_name: '',
    dateX: 0,
    dateY: 0,
    dateWidth: 0,
    dateHeight: 0,
    payX: 0,
    payY: 0,
    payWidth: 0,
    payHeight: 0,
    payLine1X: 0,
    payLine1y: 0,
    payLine1Width: 0,
    payLine1Height: 0,
    payLine2X: 0,
    payLine2y: 0,
    payLine2Width: 0,
    payLine2Height: 0,
    amountX: 0,
    amountY: 0,
    amountWidth: 0,
    amountHeight: 0,
    forStatementX: 0,
    forStatementY: 0,
    forStatementWidth: 0,
    forStatementHeight: 0,
    payeeTopX: 0,
    payeeTopY: 0,
    payeeTopWidth: 0,
    payeeTopHeight: 0,
    payeeBottomX: 0,
    payeeBottomY: 0,
    payeeBottomWidth: 0,
    payeeBottomHeight: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    chequePageWidth: 0,
    chequePageHeight: 0,
    chequePixelWidth: 0,
    chequePixelHeight: 0,
    payeeWordingWidth: 0,
    payeeWordingHeight: 0,
    wordsPerLine: 0,
    payVisible: 1,
    forVisible: 1,
  };

  const resetForm = () => {
    form.resetFields();
  };

  const onSave = (values) => {
    values.payVisible =
      values.payVisible === true ? 1 : values.payVisible === false ? 0 : values.payVisible;
    values.forVisible =
      values.forVisible === true ? 1 : values.forVisible === false ? 0 : values.forVisible;
    values.wordsPerLine = values.wordsPerLine ?? 0;
    selected ? editRecord(values) : addNewRecord(values);
  };

  const addNewRecord = (values) => {
    dispatch(updatePageLoader(true));
    addRecord
      .mutateAsync(values)
      .then(() => {
        dispatch(updatePageLoader(false));
        onCancel();
      })
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const editRecord = (values) => {
    const finalData = { ...values, format_id: selected?.OID };
    dispatch(updatePageLoader(true));
    updateRecord
      .mutateAsync(finalData)
      .then(() => {
        dispatch(updatePageLoader(false));
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
    const {
      CHEQUENAME,
      CHEQUEPAGEBOTTOMMARGIN,
      CHEQUEPAGEHIGHT,
      CHEQUEPAGELEFTMARGIN,
      CHEQUEPAGERIGHTMARGIN,
      CHEQUEPAGETOPMARGIN,
      CHEQUEPAGEWIDTH,
      CHEQUE_PIXHIEGHT,
      CHEQUE_PIXWIDTH,
      DATEHIGHT,
      DATEWIDTH,
      DATEX,
      DATEY,
      FORHIGHT,
      FORVISIBLE,
      FORWIDTH,
      FORX,
      FORY,
      PAYEEESACLINEBOTXF,
      PAYEEESACLINEBOTXI,
      PAYEEESACLINEBOTYF,
      PAYEEESACLINEBOTYI,
      PAYEEESACLINETOPXF,
      PAYEEESACLINETOPXI,
      PAYEEESACLINETOPYF,
      PAYEEESACLINETOPYI,
      PAYEES_WORD_HEIGHT,
      PAYEES_WORD_WIDTH,
      PAYESSVISIBLE,
      PAYHIGHT,
      PAYWIDTH,
      PAYX,
      PAYY,
      RUPEESLINEONEHIGHT,
      RUPEESLINEONEWIDTH,
      RUPEESLINEONEX,
      RUPEESLINEONEY,
      RUPEESLINETWOHIGHT,
      RUPEESLINETWOWIDTH,
      RUPEESLINETWOX,
      RUPEESLINETWOY,
      // RUPEESLINEWRAPCHAR,
      RUPEESNUMIGHT,
      RUPEESNUMWIDTH,
      RUPEESNUMX,
      RUPEESNUMY,
      WORDS_PER_LINE,
    } = data;

    form.setFields([
      { name: 'cheque_name', value: CHEQUENAME },
      { name: 'payVisible', value: PAYESSVISIBLE },
      { name: 'forVisible', value: FORVISIBLE },

      { name: 'dateX', value: DATEX },
      { name: 'dateY', value: DATEY },
      { name: 'dateWidth', value: DATEWIDTH },
      { name: 'dateHeight', value: DATEHIGHT },

      { name: 'payX', value: PAYX },
      { name: 'payY', value: PAYY },
      { name: 'payWidth', value: PAYWIDTH },
      { name: 'payHeight', value: PAYHIGHT },

      { name: 'payLine1X', value: RUPEESLINEONEX },
      { name: 'payLine1y', value: RUPEESLINEONEY },
      { name: 'payLine1Width', value: RUPEESLINEONEWIDTH },
      { name: 'payLine1Height', value: RUPEESLINEONEHIGHT },

      { name: 'payLine2X', value: RUPEESLINETWOX },
      { name: 'payLine2y', value: RUPEESLINETWOY },
      { name: 'payLine2Width', value: RUPEESLINETWOWIDTH },
      { name: 'payLine2Height', value: RUPEESLINETWOHIGHT },

      { name: 'amountX', value: RUPEESNUMX },
      { name: 'amountY', value: RUPEESNUMY },
      { name: 'amountWidth', value: RUPEESNUMWIDTH },
      { name: 'amountHeight', value: RUPEESNUMIGHT },

      { name: 'forStatementX', value: FORX },
      { name: 'forStatementY', value: FORY },
      { name: 'forStatementWidth', value: FORWIDTH },
      { name: 'forStatementHeight', value: FORHIGHT },

      { name: 'payeeTopX', value: PAYEEESACLINETOPXI },
      { name: 'payeeTopY', value: PAYEEESACLINETOPYI },
      { name: 'payeeTopWidth', value: PAYEEESACLINETOPXF },
      { name: 'payeeTopHeight', value: PAYEEESACLINETOPYF },

      { name: 'payeeBottomX', value: PAYEEESACLINEBOTXI },
      { name: 'payeeBottomY', value: PAYEEESACLINEBOTYI },
      { name: 'payeeBottomWidth', value: PAYEEESACLINEBOTXF },
      { name: 'payeeBottomHeight', value: PAYEEESACLINEBOTYF },

      { name: 'marginTop', value: CHEQUEPAGETOPMARGIN },
      { name: 'marginBottom', value: CHEQUEPAGEBOTTOMMARGIN },
      { name: 'marginLeft', value: CHEQUEPAGELEFTMARGIN },
      { name: 'marginRight', value: CHEQUEPAGERIGHTMARGIN },

      { name: 'chequePageWidth', value: CHEQUEPAGEWIDTH },
      { name: 'chequePageHeight', value: CHEQUEPAGEHIGHT },

      { name: 'chequePixelWidth', value: CHEQUE_PIXWIDTH },
      { name: 'chequePixelHeight', value: CHEQUE_PIXHIEGHT },

      { name: 'payeeWordingWidth', value: PAYEES_WORD_WIDTH },
      { name: 'payeeWordingHeight', value: PAYEES_WORD_HEIGHT },

      { name: 'wordsPerLine', value: WORDS_PER_LINE },
    ]);
  };

  const getDetails = () => {
    getChequeFormat(selected?.OID)
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
      title={selected ? 'Edit Cheque Format' : 'Add Cheque Format'}
      width={1200}
      open={open}
      onCancel={onCancel}
      onOk={validateSubmit}
      okText="Submit">
      <FormElement
        name="chequeFormatForm"
        className="cheque_format_form"
        form={form}
        initialValues={initialValues}>
        <Row
          align="middle"
          justify="flex-start"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          <Col span={8}>
            <InputField
              label="Cheque Name"
              required
              type={INPUT_TYPES.text}
              name="cheque_name"
              messageLabel="cheque name"
              placeholder="Enter cheque name"
            />
          </Col>
          <Col span={4}>
            <SwitchField name="forVisible" label="For Visible" />
          </Col>
          <Col span={4}>
            <SwitchField name="payVisible" label="Pay Visible" />
          </Col>
        </Row>
        <Row
          align="middle"
          justify="space-between"
          className="mt-5 mb-4"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          <Col lg={8}>
            <h4 label="Cheque Format Co-ordinates">Cheque Format Co-ordinates</h4>
          </Col>
          <Col lg={4}>
            <h4 label="Cheque Format Co-ordinates">X-Axis</h4>
          </Col>
          <Col lg={4}>
            <h4 label="Cheque Format Co-ordinates">Y-Axis</h4>
          </Col>
          <Col lg={4}>
            <h4 label="Cheque Format Co-ordinates">Width</h4>
          </Col>
          <Col lg={4}>
            <h4 label="Cheque Format Co-ordinates">Height</h4>
          </Col>
          {/* <Col span={11}>
            <label className="cheque_format_form_heading">Cheque Format Co-ordinates</label>
          </Col> */}
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Date</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="dateX"
              className="cheque_format_form-input"
              // messageLabel="cheque name"
              // placeholder="Enter code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="dateY"
              className="cheque_format_form-input"
              // messageLabel="code"
              // placeholder="Enter code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="dateWidth"
              className="cheque_format_form-input"
              // messageLabel="code"
              // placeholder="Enter code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="dateHeight"
              className="cheque_format_form-input"
              // messageLabel="code"
              // placeholder="Enter code"
            />
          </Col>
          {/* <Col span={11}>
            <label className="cheque_format_form_heading">Cheque Format Co-ordinates</label>
          </Col> */}
        </Row>

        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Pay</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payX"
              className="cheque_format_form-input"
              // messageLabel="code"
              // placeholder="Enter code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payY"
              className="cheque_format_form-input"
              // messageLabel="code"
              // placeholder="Enter code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payWidth"
              className="cheque_format_form-input"
              // messageLabel="code"
              // placeholder="Enter code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payHeight"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Rupees Line 1</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine1X"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine1y"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine1Width"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine1Height"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
        </Row>

        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Rupees Line 2</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine2X"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine2y"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine2Width"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payLine2Height"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Amount (Num)</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="amountX"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="amountY"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="amountWidth"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="amountHeight"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">For Statement</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="forStatementX"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="forStatementY"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="forStatementWidth"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="forStatementHeight"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">A/C Payee Line Top (X,Y1,X,Y1)</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeTopX"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeTopY"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeTopWidth"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeTopHeight"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">A/C Payee Line Bottom (X,Y2,X,Y2) </h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeBottomX"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeBottomY"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeBottomWidth"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeBottomHeight"
              className="cheque_format_form-input"
              // messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Margins (Top,Bot,Lft,Rt)</h5>
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="marginTop"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="marginBottom"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="marginLeft"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="marginRight"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
        </Row>

        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Cheque Page (Width/Hieght)</h5>
          </Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="chequePageWidth"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="chequePageHeight"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Cheque Pixels (Width/Hieght) - Constants</h5>
          </Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="chequePixelWidth"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="chequePixelHeight"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
        </Row>

        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Payee A/C Wording</h5>
          </Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeWordingWidth"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="payeeWordingHeight"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
        </Row>
        <Row
          align="top"
          justify="space-between"
          gutter={{
            xs: 6,
            sm: 10,
            md: 16,
            lg: 20,
          }}>
          <Col lg={8}>
            <h5 label="Cheque Format Co-ordinates">Words Per Line</h5>
          </Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}>
            <InputField
              type={INPUT_TYPES.number}
              name="wordsPerLine"
              className="cheque_format_form-input"
              messageLabel="code"
            />
          </Col>
        </Row>
      </FormElement>
    </CustomModal>
  );
};

export default ChequeFormatFormModal;
