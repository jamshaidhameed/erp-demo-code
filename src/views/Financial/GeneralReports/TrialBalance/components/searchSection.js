import { Row, Col } from 'antd';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import SwitchField from 'shared/controls/inputs/switch';
import FinancialYearSelect from 'components/financial/financialYearSelect';
import FinancialPeriodSelect from 'components/financial/financialPeriodSelect';
import CostCentreSelect from 'components/financial/costCentreSelect';
import { useCostCentreQuery } from 'services/api/actions/ams';
import SelectField from 'shared/controls/inputs/selectField';
import { COA_LEVELS } from 'constants/financial';

export default function TBReportSearch({
  form,
  initialValues,
  getFinancialYears,
  onChange,
  onGenerate,
  fromGlAccount,
  handleChangeFromAccount,
  toGlAccount,
  handleChangeToAccount,
}) {
  const { getList: getCostCentreList } = useCostCentreQuery();
  const costCentreList = getCostCentreList.isError ? [] : getCostCentreList?.data || [];

  const resolvedYearsData = getFinancialYears.isError ? [] : getFinancialYears?.data || [];

  return (
    <FormElement name="subLedgerReport" initialValues={initialValues} form={form} className="px-8">
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
          <FinancialYearSelect
            loading={getFinancialYears.isLoading}
            data={resolvedYearsData}
            required
            name="financial_year"
            value={initialValues.financialYear?.OID}
            onChange={(val) => onChange('financial_year', val)}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <FinancialPeriodSelect
            yearId={initialValues.financial_year?.OID}
            name="financial_period"
            required
            value={initialValues.financial_period?.OID}
            onChange={(val) => onChange('financial_period', val)}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <DateTimeInput
            label="From Date"
            name="fromDate"
            popupClassName="responsive_datepicker"
            required
            controlled
            onChange={(val) => onChange('fromDate', val)}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <DateTimeInput
            label="To Date"
            name="toDate"
            popupClassName="responsive_datepicker"
            required
            controlled
            onChange={(val) => onChange('toDate', val)}
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
            placeholder="Search To Main Account"
            value={toGlAccount}
            onChange={handleChangeToAccount}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <CostCentreSelect
            name="cost_centre"
            required
            allowClear
            options={costCentreList}
            value={initialValues.cost_centre?.id}
            controlled
            onChange={(val) => onChange('cost_centre', val)}
            loading={getCostCentreList.isLoading}
          />
        </Col>
        <Col xxl={8} lg={12} sm={12} xs={24} className="gutter-row">
          <SelectField
            title="Level"
            label="Level"
            name="level"
            messageLabel="level"
            // parentClassName="chart_of_accounts_report_level"
            options={COA_LEVELS}
            placeholder="Select level"
          />
        </Col>
        <Col xxl={4} lg={4} sm={12} xs={12} className="gutter-row">
          <SwitchField label="Zero Balance" name="zero_balance" />
        </Col>
        <Col xxl={4} lg={4} sm={12} xs={12} className="gutter-row">
          <SwitchField label="Consolidated" name="consolidated" />
        </Col>

        <Col xxl={8} lg={4} sm={10} xs={10} className="gutter-row">
          <Button type="primary" label="Generate" onClick={onGenerate} />
        </Col>
      </Row>
    </FormElement>
  );
}
