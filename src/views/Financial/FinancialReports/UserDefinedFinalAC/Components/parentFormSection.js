import { Col, Row } from 'antd';
import { FORM_NAMES } from 'constants/financial';
import { INPUT_TYPES } from 'constants/shared/common';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import SwitchField from 'shared/controls/inputs/switch';

export default function ParentFormSection({ form, initialValues, natures, isNew, validateSubmit }) {
  return (
    <FormElement
      name={FORM_NAMES.F_UDFA_PARENT_SECTION_FORM}
      initialValues={initialValues}
      className="p-5"
      form={form}>
      <Row
        align="middle"
        justify="xl-space-between"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
        <Col lg={6} md={8} sm={11}>
          <InputField
            name="description"
            label="Description"
            type={INPUT_TYPES.text}
            messageLabel="description"
            placeholder="Enter description"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SelectField
            label="Credit/Debit"
            name="type"
            messageLabel="nature"
            options={natures}
            placeholder="Select"
            required
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SwitchField label="Post" name="post" />
        </Col>

        <Col lg={4} sm={10} xs={10} className="gutter-row mt-lg-0 mt-5">
          <Button
            label={`${isNew ? 'Add' : 'Update'}`}
            className="w-100"
            onClick={validateSubmit}
          />
        </Col>
      </Row>
    </FormElement>
  );
}
