import { Row, Col } from 'antd';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';

export default function PLReportSearch({ form, initialValues, setInitialValues, onGenerate }) {
  return (
    <FormElement
      name="vendorLedgerReport"
      initialValues={initialValues}
      form={form}
      className="px-8">
      <Row
        justify="flex-start"
        align="bottom"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <DateTimeInput
            label="From Date"
            name="fromDate"
            required
            controlled
            onChange={(val) => setInitialValues((prev) => ({ ...prev, fromDate: val }))}
            messageLabel="start date"
            placeholder="Enter Start Date"
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <DateTimeInput
            label="To Date"
            name="toDate"
            required
            controlled
            onChange={(val) => setInitialValues((prev) => ({ ...prev, toDate: val }))}
            messageLabel="start date"
            placeholder="Enter Start Date"
          />
        </Col>

        <Col xxl={8} lg={4} sm={10} xs={10} className="gutter-row">
          <Button
            type="primary"
            label="Generate"
            onClick={onGenerate}
            style={{ marginBottom: 24 }}
          />
        </Col>
      </Row>
    </FormElement>
  );
}
