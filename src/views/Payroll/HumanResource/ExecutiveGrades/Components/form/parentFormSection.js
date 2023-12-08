import { Col, Row } from 'antd';
import EmployeeCategoriesSelect from 'components/payroll/employeeCategoriesSelect';
import EmployeeTypesSelect from 'components/payroll/employeeTypesSelect';
import { FORM_NAMES } from 'constants/payroll';
import { INPUT_TYPES } from 'constants/shared/common';
import Button from 'shared/controls/buttons/button';
import FormElement from 'shared/controls/form';
import { InputField } from 'shared/controls/inputs/inputField';
import SwitchField from 'shared/controls/inputs/switch';

export default function ParentFormSection({ form, initialValues, code_length, validateSubmit }) {
  return (
    <FormElement
      name={FORM_NAMES.PR_HR_EXECUTIVE_GRADE_PARENT_FORM}
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
          <InputField
            label="Code"
            required
            type={INPUT_TYPES.text}
            name="code"
            messageLabel="code"
            placeholder="Enter code"
            inputLength={code_length}
            onlyNumbers
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            label="Name"
            required
            type={INPUT_TYPES.text}
            name="name"
            messageLabel="name"
            placeholder="Enter name"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <EmployeeTypesSelect name="employeeType" />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <EmployeeCategoriesSelect name="employeeCategory" />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <SwitchField label="Active" name="post" />
        </Col>

        <Col lg={4} sm={10} xs={10} className="gutter-row">
          <Button label={initialValues.id ? 'Update' : 'Save'} onClick={validateSubmit} />
        </Col>
      </Row>
    </FormElement>
  );
}
