import { Col, Row } from 'antd';
import { FORM_NAMES } from 'constants/payroll';
import { INPUT_TYPES, MAX_AMOUNT_LIMIT } from 'constants/shared/common';
import PageTitle from 'shared/components/pageTitle';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';

export default function DetailFormSection({ form, initialValues, validateSubmit }) {
  return (
    <>
      <PageTitle title="LFA" />

      <FormElement
        name={FORM_NAMES.PR_HR_EXECUTIVE_GRADE_CHILD_FORM}
        initialValues={initialValues}
        className="p-5"
        form={form}>
        <Row
          align="bottom"
          justify="flex-start"
          gap={5}
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          <Col lg={6} md={8} sm={11}>
            <InputField
              label="Annual Basic %"
              required
              type={INPUT_TYPES.amount}
              name="annualBasic"
              messageLabel="Annual Basic"
              placeholder="Enter Annual Basic"
              min={0}
              max={100}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <InputField
              name="amount"
              label="LFA Amount"
              type={INPUT_TYPES.amount}
              messageLabel="LFA Amount"
              placeholder="Enter LFA Amount"
              required
              min={0}
              max={MAX_AMOUNT_LIMIT}
            />
          </Col>
        </Row>
      </FormElement>
    </>
  );
}
