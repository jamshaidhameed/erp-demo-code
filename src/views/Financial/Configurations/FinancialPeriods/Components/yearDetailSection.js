import { Col, Form, Row } from 'antd';
import FinancialYearSelect from 'components/financial/financialYearSelect';
import { DATE_FORMATE, INPUT_TYPES, OPEN_CLOSE_OPTIONS } from 'constants/shared/common';
import PageTitle from 'shared/components/pageTitle';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import { toLocalDateTime } from 'utils/shared/dateTime';

export default function YearDetailSection({
  yearsLoading,
  yearDetails,
  financialYear,
  onYearChange,
  resolvedYearsData,
}) {
  const [form] = Form.useForm();

  return (
    <>
      <PageTitle title="Year Details" />

      <FormElement name="financialPeriodYearsForm" className="p-5" form={form}>
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
            <FinancialYearSelect
              loading={yearsLoading}
              data={resolvedYearsData}
              value={financialYear}
              onChange={onYearChange}
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <InputField
              label="Financial Description"
              type={INPUT_TYPES.text}
              messageLabel="financial description"
              placeholder="Enter financial description"
              disabled
              controlled
              value={yearDetails?.ST_FIN_YEAR_DESC ?? ''}
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <DateTimeInput
              label="Start Date"
              required
              messageLabel="start date"
              placeholder="Enter Start Date"
              disabled
              controlled
              value={
                yearDetails?.FROM_DATE
                  ? toLocalDateTime(yearDetails.FROM_DATE, DATE_FORMATE[9])
                  : null
              }
            />
          </Col>

          <Col md={12} lg={8} xxl={5}>
            <DateTimeInput
              label="End Date"
              required
              messageLabel="end date"
              placeholder="Enter End Date"
              disabled
              controlled
              value={
                yearDetails?.TO_DATE ? toLocalDateTime(yearDetails.TO_DATE, DATE_FORMATE[9]) : null
              }
            />
          </Col>

          <Col md={12} lg={8} xxl={4}>
            <SelectField
              label="Period Status"
              messageLabel="period status"
              options={OPEN_CLOSE_OPTIONS}
              required
              disabled
              controlled
              value={yearDetails?.PeriodStatus?.toString() ?? undefined}
            />
          </Col>
        </Row>
      </FormElement>
    </>
  );
}
