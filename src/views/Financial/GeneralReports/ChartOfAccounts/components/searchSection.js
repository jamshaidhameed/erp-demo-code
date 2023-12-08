import { Row, Col } from 'antd';
import SelectField from 'shared/controls/inputs/selectField';
import Button from 'shared/controls/buttons/button';
import { COA_LEVELS } from 'constants/financial';
import FormElement from 'shared/controls/form';

export default function COAReportSearch({ level, setLevel, onGenerate }) {
  return (
    <FormElement name="chartOfAccountsReport" className="px-8">
      <Row
        justify="flex-start"
        align="bottom"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
        <Col lg={6} sm={10} xs={10} className="gutter-row">
          <SelectField
            title="Level"
            label="Level"
            messageLabel="level"
            parentClassName="chart_of_accounts_report_level"
            options={COA_LEVELS}
            value={level}
            onChange={setLevel}
            controlled
            placeholder="Select level"
          />
        </Col>

        <Col lg={4} sm={10} xs={10} className="gutter-row">
          <Button label="Generate" onClick={onGenerate} />
        </Col>
      </Row>
    </FormElement>
  );
}
