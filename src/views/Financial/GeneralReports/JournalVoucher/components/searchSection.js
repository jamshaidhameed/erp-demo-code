import { Row, Col } from 'antd';
import FinancialPeriodSelect from 'components/financial/financialPeriodSelect';
import FinancialYearSelect from 'components/financial/financialYearSelect';
import { FORM_NAMES } from 'constants/financial';
import { INPUT_TYPES } from 'constants/shared/common';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';

const STATUS_OPTIONS = [
  {
    label: 'All',
    value: '3',
  },
  {
    label: 'Un Posted',
    value: '0',
  },
  {
    label: 'Posted',
    value: '1',
  },
];

const TYPE_OPTION = [
  {
    label: 'Journal Voucher',
    value: '0',
  },
  // {
  //   label: 'Voucher Logs',
  //   value: '1',
  // },
];

export default function JVReportSearch({
  form,
  yearsList,
  search,
  onGenerate,
  onFieldsChange,
  onPeriodChange,
}) {
  return (
    <FormElement
      name={FORM_NAMES.F_GR_JV_SEARCH_FORM}
      className="px-8"
      form={form}
      initialValues={search}
      onFieldsChange={onFieldsChange}>
      <Row
        justify="flex-start"
        align="bottom"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
        <Col lg={6} md={8} sm={11}>
          <FinancialYearSelect
            name="financial_year"
            loading={yearsList.isLoading}
            data={yearsList.isError ? [] : yearsList?.data || []}
            required
            controlled={false}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <FinancialPeriodSelect
            name="financial_period"
            yearId={search.financial_year}
            required
            controlled
            onChange={onPeriodChange}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="from_voucher_number"
            label="From Voucher Number"
            type={INPUT_TYPES.number}
            messageLabel="from voucher number"
            placeholder="Enter from voucher number"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="to_voucher_number"
            label="To Voucher Number"
            type={INPUT_TYPES.number}
            messageLabel="to voucher number"
            placeholder="Enter to voucher number"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <DateTimeInput
            name="from_date"
            label="From Date"
            messageLabel="from date"
            placeholder="Enter from Date"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <DateTimeInput
            name="to_date"
            label="To Date"
            messageLabel="to date"
            placeholder="Enter to Date"
            required
            minDate={search.from_date}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            name="post_value"
            label="Status"
            messageLabel="status"
            options={STATUS_OPTIONS}
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            name="report_type"
            label="Report Type"
            messageLabel="report type"
            options={TYPE_OPTION}
            required
          />
        </Col>

        <Col lg={4} sm={10} xs={10} className="gutter-row">
          <Button label="Generate" onClick={onGenerate} />
        </Col>
      </Row>
    </FormElement>
  );
}
