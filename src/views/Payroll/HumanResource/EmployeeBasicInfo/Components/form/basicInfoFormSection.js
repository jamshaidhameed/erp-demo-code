import { Col, Row } from 'antd';
import BankSelect from 'components/payroll/banksSelect';
import EmployeeCategoriesSelect from 'components/payroll/employeeCategoriesSelect';
import EmployeeTypesSelect from 'components/payroll/employeeTypesSelect';
import ExecutiveGradeSelect from 'components/payroll/executiveGradeSelect';
import { INPUT_TYPES } from 'constants/shared/common';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { InputField } from 'shared/controls/inputs/inputField';
import SelectField from 'shared/controls/inputs/selectField';
import SwitchField from 'shared/controls/inputs/switch';

export default function BasicInfoFormSection({ ADDRESS_TYPES, GENDERS_LIST, MARITAL_STATUS_LIST }) {
  return (
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
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Titles"
          type={INPUT_TYPES.text}
          name="titles"
          messageLabel="titles"
          placeholder="Enter titles"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Initials"
          type={INPUT_TYPES.text}
          name="initials"
          messageLabel="initials"
          placeholder="Enter initials"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="First Name"
          type={INPUT_TYPES.text}
          name="firstName"
          messageLabel="first name"
          placeholder="Enter first name"
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Middle Name"
          type={INPUT_TYPES.text}
          name="middleName"
          messageLabel="middle name"
          placeholder="Enter middle name"
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Last Name"
          type={INPUT_TYPES.text}
          name="lastName"
          messageLabel="last name"
          placeholder="Enter last name"
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Father / Husband Name"
          type={INPUT_TYPES.text}
          name="fatherName"
          messageLabel="father / husband name"
          placeholder="Enter father / husband name"
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <DateTimeInput
          label="Date Of Birth"
          required
          name="dob"
          messageLabel="Date Of Birth"
          placeholder="Enter Date Of Birth"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="NIC No"
          type={INPUT_TYPES.text}
          name="nic"
          messageLabel="NIC number"
          placeholder="Enter NIC number"
          onlyNumbers
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="NTN"
          type={INPUT_TYPES.text}
          name="ntn"
          messageLabel="NTN number"
          placeholder="Enter NTN number"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField name="city" label="City" messageLabel="City" options={[]} required />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <BankSelect name="bank" />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Bank Branch"
          type={INPUT_TYPES.text}
          name="bankBranch"
          messageLabel="bank branch"
          placeholder="Enter bank branch"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Branch Name"
          type={INPUT_TYPES.text}
          name="branchName"
          messageLabel="branch name"
          placeholder="Enter branch name"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Account No"
          type={INPUT_TYPES.text}
          name="accountNo"
          messageLabel="account No"
          placeholder="Enter account No"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Location"
          type={INPUT_TYPES.text}
          name="location"
          messageLabel="location"
          placeholder="Enter location"
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField name="department" label="Department" messageLabel="department" options={[]} />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField name="jobTitle" label="Job Title" messageLabel="Job Title" options={[]} />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <ExecutiveGradeSelect name="executiveGrade" />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <EmployeeTypesSelect name="employeeType" required={false} />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <EmployeeCategoriesSelect name="employeeCategory" required={false} />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField
          name="addressType"
          label="Address Type"
          messageLabel="Address Type"
          options={ADDRESS_TYPES}
          required
        />
      </Col>

      <Col lg={12} md={16} sm={22}>
        <InputField
          label="Address"
          type={INPUT_TYPES.text}
          name="address"
          messageLabel="address"
          placeholder="Enter address"
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField
          name="religion"
          label="Religion"
          messageLabel="religion"
          options={[]}
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField
          name="nationality"
          label="Nationality"
          messageLabel="nationality"
          options={[]}
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField
          name="gender"
          label="Gender"
          messageLabel="gender"
          options={GENDERS_LIST}
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SelectField
          name="maritalStatus"
          label="Marital Status"
          messageLabel="marital status"
          options={MARITAL_STATUS_LIST}
          required
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <DateTimeInput
          label="Date Of Joining"
          required
          name="doj"
          messageLabel="Date Of Joining"
          placeholder="Enter Date Of Joining"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <DateTimeInput
          label="Date Confirmed"
          name="dateConfirmed"
          messageLabel="Date Confirmed"
          placeholder="Enter Date Confirmed"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Probation Days"
          type={INPUT_TYPES.text}
          name="probationDays"
          messageLabel="Probation Days"
          placeholder="Enter Probation Days"
          onlyNumbers
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <DateTimeInput
          label="Probation End Date"
          name="probationEndDate"
          messageLabel="Probation End Date"
          placeholder="Enter Probation End Date"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Reported To"
          type={INPUT_TYPES.text}
          name="reportedTo"
          messageLabel="Reported To"
          placeholder="Enter Reported To"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <BankSelect
          name="companyBank"
          label="Company Bank"
          placeholder="Select Company Bank"
          messageLabel="Company Bank"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Company Bank Branch"
          type={INPUT_TYPES.text}
          name="companyBankBranch"
          messageLabel="company bank branch"
          placeholder="Enter company bank branch"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <InputField
          label="Company Branch Name"
          type={INPUT_TYPES.text}
          name="companyBranchName"
          messageLabel="company branch name"
          placeholder="Enter company branch name"
        />
      </Col>

      <Col lg={6} md={8} sm={11}>
        <SwitchField label="Active" name="post" />
      </Col>
    </Row>
  );
}
