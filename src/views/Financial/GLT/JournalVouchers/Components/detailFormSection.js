import { Col, Row } from 'antd';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import CostCentreSelect from 'components/financial/costCentreSelect';
import SubAccountAutoComplete from 'components/financial/subAccountAutoComplete';
import { FORM_NAMES } from 'constants/financial';
import {
  FORM_SUBMIT_TYPES,
  INPUT_TYPES,
  MAX_AMOUNT_LIMIT,
  shortKeys,
} from 'constants/shared/common';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';

export default function DetailFormSection({
  form,
  parentInitialValues,
  initialValues,
  onChange,
  natures,
  validateSubmit,
  resetForm,
  costCentreList,
  costCentreLoading,
  populateBalance,
  onSearch,
  formMode,
  modes,
}) {
  const buttons = [
    {
      label: 'Add & Save',
      shortKey: shortKeys.F7,
      onClick: () => validateSubmit(FORM_SUBMIT_TYPES.save),
      disabled:
        formMode === modes.copy || parentInitialValues.is_approved == 1 || !parentInitialValues.id,
    },
    {
      label: 'Update',
      shortKey: shortKeys.F8,
      onClick: () => validateSubmit(FORM_SUBMIT_TYPES.update),
      disabled:
        formMode === modes.copy ||
        parentInitialValues.is_approved == 1 ||
        !parentInitialValues.id ||
        !initialValues.id,
    },
    {
      label: 'Refresh',
      shortKey: shortKeys.F9,
      onClick: resetForm,
    },
    {
      label: 'Search',
      shortKey: shortKeys.F10,
      onClick: onSearch,
    },
    {
      label: 'Balance',
      shortKey: shortKeys.F11,
      onClick: populateBalance,
    },
  ];

  const main_account_id = initialValues.account?.option?.GL_SUB_ACCOUNT_GROUPS ?? '';

  return (
    <FormElement
      name={FORM_NAMES.F_JV_DETAIL_SECTION_FORM}
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
          <AccountAutoComplete
            value={initialValues.account}
            onChange={(value) => onChange('account', value)}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SubAccountAutoComplete
            value={initialValues.subAccount}
            accountId={main_account_id}
            onChange={(value) => onChange('subAccount', value)}
            disabled={!main_account_id}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <CostCentreSelect
            name="cost_centre"
            required
            allowClear
            options={costCentreList}
            loading={costCentreLoading}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="narration"
            label="Narration"
            type={INPUT_TYPES.text}
            messageLabel="narration"
            placeholder="Enter narration"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            label="Credit/Debit"
            name="credit_or_debit"
            messageLabel="nature"
            options={natures}
            placeholder="Select"
            allowClear
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="amount"
            label="Amount"
            type={INPUT_TYPES.amount}
            messageLabel="amount"
            placeholder="Enter amount"
            required
            min={0}
            max={MAX_AMOUNT_LIMIT}
          />
        </Col>
      </Row>

      <Row>
        {buttons.map((item) => (
          <Button style={{ marginRight: '15px' }} key={item.label} {...item} />
        ))}
      </Row>
    </FormElement>
  );
}
