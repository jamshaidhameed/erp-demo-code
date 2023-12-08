import { Row, Col } from 'antd';
import SubAccountGroupSelect from 'components/financial/subAccountGroupSelect';
import { INPUT_TYPES } from 'constants/shared/common';
import PageTitle from 'shared/components/pageTitle';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import SwitchField from 'shared/controls/inputs/switch';

const natures = [
  {
    label: 'Debit',
    value: 'D',
  },
  {
    label: 'Credit',
    value: 'C',
  },
];

const chartOfAccountForm = ({ form, initialValues, selected, parent, validateSubmit }) => {
  const SAGDisabled = parent == null || selected != null || parent?.currentAccountLevel !== 4;

  return (
    <>
      <PageTitle title="Main Account Add/Edit" />

      <FormElement
        name="chartOfAccounts"
        className="px-8 pb-5 chart_of_accounts-form"
        form={form}
        initialValues={initialValues}>
        <Row
          align="middle"
          justify="flex-start"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          <Col lg={6} sm={10} xs={20} className="gutter-row">
            <InputField
              label="Parent"
              type={INPUT_TYPES.text}
              messageLabel="parent"
              placeholder=""
              disabled
              controlled
              value={parent?.label ?? ''}
            />
          </Col>

          <Col lg={6} sm={10} xs={20} className="gutter-row">
            <InputField
              label="Code"
              required
              type={INPUT_TYPES.text}
              name="personal_code"
              messageLabel="code"
              placeholder="Enter code"
              disabled={!initialValues.is_code_editable}
              inputLength={initialValues.current_code_length}
              onlyNumbers
            />
          </Col>

          <Col lg={6} sm={20} xs={20} className="gutter-row">
            <InputField
              label="Description"
              type={INPUT_TYPES.text}
              name="account_desc"
              messageLabel="description"
              placeholder="Enter description"
              required
              allowSc={false}
            />
          </Col>

          <Col lg={6} sm={10} xs={20} className="gutter-row">
            <SubAccountGroupSelect name="sub_account_group" disabled={SAGDisabled} />
          </Col>
        </Row>

        <Row
          justify="flex-start"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          align="middle">
          <Col lg={6} sm={10} xs={10} className="gutter-row">
            <SelectField
              label="Nature"
              name="st_nature"
              messageLabel="nature"
              options={natures}
              disabled
              placeholder="Select nature"
            />
          </Col>

          <Col lg={6} sm={10} xs={10} className="gutter-row">
            <SwitchField label="Active" name="status" disabled={!!selected} />
          </Col>

          <Col lg={4} sm={10} xs={10} className="gutter-row">
            <Button
              label={selected ? 'Update' : 'Save'}
              disabled={parent ? false : true}
              className="w-100"
              onClick={validateSubmit}
            />
          </Col>
        </Row>
      </FormElement>
    </>
  );
};

export default chartOfAccountForm;
