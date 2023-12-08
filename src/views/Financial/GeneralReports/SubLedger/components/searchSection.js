import { Row, Col } from 'antd';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import VoucherTypeSelect from 'components/financial/voucherTypeSelect';
import SelectField from 'shared/controls/inputs/selectField';
import CostCentreSelect from 'components/financial/costCentreSelect';
import { useCostCentreQuery } from 'services/api/actions/ams';
import AutoCompleteInput from 'shared/controls/inputs/autoComplete';
import SwitchField from 'shared/controls/inputs/switch';
import { useEffect } from 'react';
import { DEFAULT_AUTO_COMPLETE } from 'constants/shared/common';

export default function SLReportSearch({
  form,
  allBooks,
  initialValues,
  setInitialValues,
  subAccountsGroups,
  handleSubAccountGroup,
  getMainAccounts,
  onGenerate,
  getSubAccounts,
  mainAccount,
  handleChangeMainAccount,
  fromSubAccount,
  handleChangeFromAccount,
  toSubAccount,
  handleChangeToAccount,
}) {
  const { getList: getCostCentreList } = useCostCentreQuery();
  const costCentreList = getCostCentreList.isError ? [] : getCostCentreList?.data || [];

  const mainAccountsList = getMainAccounts.isError
    ? []
    : getMainAccounts?.data?.filter(
        (item) => item.GL_SUB_ACCOUNT_GROUPS === initialValues.subAccountGroup
      ) || [];

  const subAccountsList = getSubAccounts.isError
    ? []
    : getSubAccounts?.data?.map((item) => ({
        ...item,
        label: `${item.ST_SUB_ACCOUNT_CODE}-${item.ST_SUB_ACCOUNT_DESC}`,
        value: item.OID,
      })) || [];

  useEffect(() => {
    handleChangeMainAccount({ ...DEFAULT_AUTO_COMPLETE });
  }, [initialValues.subAccountGroup]);

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
          <SelectField
            label="Sub Account Groups"
            name="subAccountGroup"
            placeholder="Select group"
            // messageLabel="group"
            controlled
            // required
            // value={selectedGroup}
            onChange={handleSubAccountGroup}
            options={subAccountsGroups}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <AutoCompleteInput
            label="Main Account"
            options={mainAccountsList}
            loading={getMainAccounts.isLoading}
            controlled
            onChange={handleChangeMainAccount}
            messageLabel="main account"
            required={true}
            value={mainAccount?.value ?? ''}
            selectedOption={mainAccount?.option ?? null}
            defaultValue={mainAccount?.defaultValue ?? ''}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <AutoCompleteInput
            label="From Sub Account"
            options={subAccountsList}
            loading={getSubAccounts.isLoading}
            controlled
            onChange={handleChangeFromAccount}
            messageLabel="from sub account"
            required={true}
            value={fromSubAccount?.value ?? ''}
            selectedOption={fromSubAccount?.option ?? null}
            defaultValue={fromSubAccount?.defaultValue ?? ''}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <AutoCompleteInput
            label="To Sub Account"
            options={subAccountsList}
            loading={getSubAccounts.isLoading}
            controlled
            onChange={handleChangeToAccount}
            messageLabel="to sub account"
            required={true}
            value={toSubAccount?.value ?? ''}
            selectedOption={toSubAccount?.option ?? null}
            defaultValue={toSubAccount?.defaultValue ?? ''}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <CostCentreSelect
            name="cost_centre"
            required
            // allowClear
            options={costCentreList}
            // value={initialValues.cost_centre?.id}
            // controlled
            // onChange={(val) => onChange('cost_centre', val)}
            loading={getCostCentreList.isLoading}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <SwitchField label="Include UnPosted Vouchers" name="post" />
        </Col>

        <Col xxl={8} lg={4} sm={10} xs={10} className="gutter-row">
          <Button type="primary" label="Generate" onClick={onGenerate} />
        </Col>
      </Row>
    </FormElement>
  );
}
