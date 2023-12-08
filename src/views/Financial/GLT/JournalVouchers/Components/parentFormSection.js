import { Col, Row } from 'antd';
import ConfigBooksSelect from 'components/financial/configBooksSelect';
import { FORM_NAMES } from 'constants/financial';
import { INPUT_TYPES, MAX_AMOUNT_LIMIT, shortKeys } from 'constants/shared/common';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import CurrencySelect from 'shared/controls/select/currencySelect';

export default function ParentFormSection({ form, initialValues, locations, validateSubmit }) {
  return (
    <FormElement
      name={FORM_NAMES.F_JV_PARENT_SECTION_FORM}
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
          <ConfigBooksSelect
            mode="single"
            showSearch={false}
            placeholder="Select GL Book"
            messageLabel="book"
            label="GL Book"
            name="book_id"
            required
            disabled={initialValues.is_approved == 1}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <DateTimeInput
            name="voucher_date"
            label="Voucher Date"
            messageLabel="voucher date"
            placeholder="Enter Voucher Date"
            required
            disabled={initialValues.is_approved == 1}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            name="location"
            label="Location"
            messageLabel="location"
            placeholder="Select Location"
            fieldNames={{ label: 'ORGANIZATION_NAME', value: 'OID' }}
            options={locations || []}
            required
            disabled
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <CurrencySelect name="currency_id" required disabled={initialValues.is_approved == 1} />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="currency_rate"
            label="Currency Rate"
            type={INPUT_TYPES.amount}
            messageLabel="currency rate"
            placeholder="Enter currency rate"
            required
            min={0}
            max={MAX_AMOUNT_LIMIT}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="voucher_narration"
            label="Narration"
            type={INPUT_TYPES.text}
            messageLabel="narration"
            placeholder="Enter narration"
            disabled={initialValues.is_approved == 1}
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="voucher_status"
            label="Voucher Status"
            type={INPUT_TYPES.text}
            messageLabel="voucher status"
            placeholder=""
            disabled
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="module"
            label="Module"
            type={INPUT_TYPES.text}
            messageLabel="module"
            placeholder=""
            disabled
          />
        </Col>

        {initialValues.voucher_code && (
          <Col lg={6} md={8} sm={11}>
            <InputField
              parentClassName="mb-0"
              name="voucher_code"
              label="Voucher Code"
              type={INPUT_TYPES.number}
              messageLabel="voucher code"
              placeholder=""
              disabled
            />
          </Col>
        )}

        <Col lg={4} sm={10} xs={10} className="gutter-row">
          <Button
            shortKey={shortKeys.F2}
            label={initialValues.id ? 'Update' : 'Save'}
            disabled={initialValues.is_approved == 1}
            onClick={() => validateSubmit(initialValues.is_submitted, initialValues.is_approved)}
          />
        </Col>
      </Row>
    </FormElement>
  );
}
