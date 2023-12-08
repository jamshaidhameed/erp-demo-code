import { Col, Row } from 'antd';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import { FORM_NAMES } from 'constants/financial';
import { FORM_SUBMIT_TYPES, INPUT_TYPES } from 'constants/shared/common';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import CheckBox from 'shared/controls/inputs/checkBox';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';

const reportOptions = [];

export default function DetailFormSection({
  form,
  initialValues,
  natures,
  sum_detail_options,
  symbol_options,
  onChange,
  validateSubmit,
}) {
  const buttons = [
    {
      label: 'Add',
      onClick: () => validateSubmit(FORM_SUBMIT_TYPES.save),
    },
    {
      label: 'Update',
      onClick: () => validateSubmit(FORM_SUBMIT_TYPES.update),
    },
    {
      label: 'Cancel',
      onClick: () => {},
    },
  ];

  return (
    <FormElement
      name={FORM_NAMES.F_UDFA_DETAIL_SECTION_FORM}
      initialValues={initialValues}
      className="p-5"
      form={form}>
      <Row
        align="middle"
        justify="xl-space-between"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
        <Col lg={6} md={8} sm={11}>
          <AccountAutoComplete
            label="From Account"
            messageLabel="from account"
            placeholder="Search"
            value={initialValues.fromAccount}
            onChange={(value) => onChange('fromAccount', value)}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <AccountAutoComplete
            label="To Account"
            messageLabel="To account"
            placeholder="Search"
            value={initialValues.toAccount}
            onChange={(value) => onChange('toAccount', value)}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            label="Report ID"
            name="reportId"
            messageLabel="report ID"
            options={reportOptions}
            placeholder="Select"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="lineNo"
            label="Line No"
            type={INPUT_TYPES.text}
            messageLabel="Line No"
            placeholder="Enter Line No"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            label="Credit/Debit"
            name="type"
            messageLabel="nature"
            options={natures}
            placeholder="Select"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            label="Sum/Detail"
            name="sumDetail"
            messageLabel="Sum/Detail"
            options={sum_detail_options}
            placeholder="Select"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="str1"
            label="Str 1"
            type={INPUT_TYPES.text}
            messageLabel="Str 1"
            placeholder="Enter Str 1"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="str2"
            label="Str 2"
            type={INPUT_TYPES.text}
            messageLabel="Str 2"
            placeholder="Enter Str 2"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            label="Symbol"
            name="symbol"
            messageLabel="Symbol"
            options={symbol_options}
            placeholder="Select"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="addRefToNo"
            label="Add Ref To No"
            type={INPUT_TYPES.text}
            messageLabel="Add Ref To No"
            placeholder="Enter Add Ref To No"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="refNo"
            label="Ref No"
            type={INPUT_TYPES.text}
            messageLabel="Ref No"
            placeholder="Enter Ref No"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="indentPosition"
            label="Ident Position"
            type={INPUT_TYPES.text}
            messageLabel="Ident Position"
            placeholder="Enter Ident Position"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <CheckBox label="Print" name="print" />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <CheckBox label="Bold" name="bold" />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <CheckBox label="Parenth" name="parenth" />
        </Col>
      </Row>

      <Row>
        {buttons.map((item) => (
          <Button style={{ marginRight: '15px' }} key={item.label} {...item} />
        ))}
      </Row>
    </FormElement>
  );
}
