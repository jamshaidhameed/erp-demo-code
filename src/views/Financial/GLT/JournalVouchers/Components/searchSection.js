import FormElement from 'shared/controls/form';
import { Col, Row } from 'antd';
import { InputField } from 'shared/controls/inputs/inputField';
import ConfigBooksSelect from 'components/financial/configBooksSelect';
import Card from 'shared/components/card';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import Button from 'shared/controls/buttons/button';
import AccountAutoComplete from 'components/financial/accountAutoComplete';
import SubAccountAutoComplete from 'components/financial/subAccountAutoComplete';
import SelectField from 'shared/controls/inputs/selectField';
import { INPUT_TYPES } from 'constants/shared/common';

export default function JournalVouchersSearch({ form, search, onChange, onSearch, POST_OPTIONS }) {
  const main_account_id = search.account?.option?.GL_SUB_ACCOUNT_GROUPS ?? '';

  return (
    <Card>
      <FormElement name="journalVouchersSearchForm" className="p-5 journal_voucher" form={form}>
        <Row
          align="bottom"
          justify="space-between"
          gap={5}
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          <Col lg={6} md={8} sm={11}>
            <InputField
              label="Voucher Code"
              type={INPUT_TYPES.number}
              messageLabel="voucher code"
              placeholder="Enter Voucher Code"
              controlled
              value={search.voucher_code}
              onChange={(value) => onChange('voucher_code', value)}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <ConfigBooksSelect
              controlled
              value={search.books}
              onChange={(value) => onChange('books', value)}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <DateTimeInput
              label="Voucher Date"
              messageLabel="voucher date"
              placeholder="Enter Voucher Date"
              controlled
              value={search.voucher_date}
              onChange={(value) => onChange('voucher_date', value)}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <InputField
              label="Narration"
              type={INPUT_TYPES.text}
              messageLabel="Narration"
              placeholder="Enter Narration"
              controlled
              value={search.narration}
              onChange={(e) => onChange('narration', e.target.value)}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <InputField
              label="Detail Narration"
              type={INPUT_TYPES.text}
              messageLabel="Detail Narration"
              placeholder="Enter detail narration"
              controlled
              value={search.detail_narration}
              onChange={(e) => onChange('detail_narration', e.target.value)}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <AccountAutoComplete
              value={search.account}
              onChange={(value) => onChange('account', value)}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <SubAccountAutoComplete
              value={search.subAccount}
              accountId={main_account_id}
              onChange={(value) => onChange('subAccount', value)}
              disabled={!main_account_id}
            />
          </Col>

          <Col lg={6} md={8} sm={11}>
            <SelectField
              label="Post"
              messageLabel="post"
              options={POST_OPTIONS}
              placeholder="Select"
              controlled
              value={search.post}
              onChange={(value) => onChange('post', value)}
            />
          </Col>

          <Col lg={4} md={10} sm={11}>
            <Button label="Search" className="w-50 mt-4" onClick={onSearch} />
          </Col>
        </Row>
      </FormElement>
    </Card>
  );
}
