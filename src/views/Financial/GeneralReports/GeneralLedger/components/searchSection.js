import { Row, Col } from 'antd';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import VoucherTypeSelect from 'components/financial/voucherTypeSelect';
import SelectField from 'shared/controls/inputs/selectField';

export default function GLReportSearch({
  form,
  allBooks,
  initialValues,
  setInitialValues,
  onGenerate,
  fromGlAccount,
  handleChangeFromAccount,
  toGlAccount,
  handleChangeToAccount,
}) {
  const onVoucherTypeChange = async (val) => {
    setInitialValues({ ...initialValues, voucher_type: val?.OID ?? 'all' });
  };

  const resolvedBooks = allBooks.isError
    ? []
    : allBooks?.data?.length > 0
    ? [
        { ST_BOOK_DESC: 'ALL', OID: 'all' },
        ...allBooks.data.filter((item) => item.GL_VOUCHER_TYPES === initialValues.voucher_type),
      ]
    : [{ ST_BOOK_DESC: 'ALL', OID: 'all' }];

  return (
    <FormElement
      name="generalLedgerReport"
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
            messageLabel="start date"
            placeholder="Enter Start Date"
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <DateTimeInput
            label="To Date"
            name="toDate"
            required
            messageLabel="start date"
            placeholder="Enter Start Date"
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <VoucherTypeSelect
            name="voucher_type"
            showAll={true}
            required
            value={initialValues.voucher_type}
            onChange={onVoucherTypeChange}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <SelectField
            fieldNames={{ label: 'ST_BOOK_DESC', value: 'OID' }}
            name="book_id"
            label="Select Book"
            options={resolvedBooks}
            loading={allBooks.isLoading}
            messageLabel="Book"
            required={true}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <AccountAutoComplete
            label="From Main Account"
            placeholder="Search From Main Account"
            value={fromGlAccount}
            onChange={handleChangeFromAccount}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <AccountAutoComplete
            label="To Main Account"
            placeholder="Search From Main Account"
            value={toGlAccount}
            onChange={handleChangeToAccount}
          />
        </Col>

        <Col xxl={8} lg={4} sm={10} xs={10} className="gutter-row">
          <Button type="primary" label="Generate" onClick={onGenerate} />
        </Col>
      </Row>
    </FormElement>
  );
}
