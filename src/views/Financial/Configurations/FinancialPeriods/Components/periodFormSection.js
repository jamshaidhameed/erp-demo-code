import { Col, Row } from 'antd';
import { INPUT_TYPES, OPEN_CLOSE_OPTIONS } from 'constants/shared/common';
import PageTitle from 'shared/components/pageTitle';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import SwitchField from 'shared/controls/inputs/switch';
import Button from 'shared/controls/buttons/button';

export default function PeriodFormSection({
  initialValues,
  disabled,
  form,
  onFieldsChange,
  minDate,
  validateSubmit,
  selectedPeriod,
}) {
  return (
    <>
      <PageTitle title={`${selectedPeriod ? 'Update' : 'Add'} Period`} />

      <FormElement
        name="FP_Period_Section_Form"
        initialValues={initialValues}
        onFieldsChange={onFieldsChange}
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
          <Col md={12} lg={8} xxl={5}>
            <InputField
              label="Period Code"
              required
              type={INPUT_TYPES.text}
              name="period_code"
              messageLabel="period code"
              placeholder="Enter period code"
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <InputField
              label="Period Description"
              required
              type={INPUT_TYPES.text}
              name="period_description"
              messageLabel="period description"
              placeholder="Enter Period Description"
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <DateTimeInput
              label="Period Start Date"
              required
              name="from_date"
              messageLabel="period start date"
              placeholder="Enter Period Start Date"
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <DateTimeInput
              label="Period End Date"
              required
              name="to_date"
              messageLabel="period end date"
              placeholder="Enter Period End Date"
              minDate={minDate}
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <SelectField
              name="period_status"
              label="Period Status"
              messageLabel="period status"
              options={OPEN_CLOSE_OPTIONS}
              required
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <SwitchField label="Active" name="status" />
          </Col>

          <Col lg={4} sm={10} xs={10} className="gutter-row mt-lg-0 mt-5">
            <Button
              disabled={disabled}
              label={`${selectedPeriod ? 'Update' : 'Add'}`}
              className="w-100"
              onClick={validateSubmit}
            />
          </Col>
        </Row>
      </FormElement>
    </>
  );
}
