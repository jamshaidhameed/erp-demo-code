import { Col, Row } from 'antd';
import PageTitle from 'shared/components/pageTitle';
import { InputField } from 'shared/controls/inputs/inputField';
import DateTimeInput from 'shared/controls/inputs/dateTimeInput';
import { INPUT_TYPES, MAX_AMOUNT_LIMIT } from 'constants/shared/common';

export default function ContactInfoFormSection() {
  return (
    <>
      <PageTitle title="Contract Info" />

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
            label="Contract Days"
            type={INPUT_TYPES.number}
            name="contractDays"
            messageLabel="contract days"
            placeholder="Enter contract days"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            label="Contract Months"
            type={INPUT_TYPES.number}
            name="contractMonths"
            messageLabel="contract months"
            placeholder="Enter contract months"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            label="Contract Years"
            type={INPUT_TYPES.number}
            name="contractYears"
            messageLabel="contract years"
            placeholder="Enter contract years"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <DateTimeInput
            label="Contract End Date"
            name="contractEndDate"
            messageLabel="Contract End Date"
            placeholder="Enter Contract End Date"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            label="Leave Entitlement"
            type={INPUT_TYPES.number}
            name="leaveEntitlement"
            messageLabel="Leave Entitlement"
            placeholder="Enter Leave Entitlement"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            label="Leave Availed"
            type={INPUT_TYPES.number}
            name="leaveAvailed"
            messageLabel="Leave Availed"
            placeholder="Enter Leave Availed"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="medicalEntitlement"
            label="Medical Entitlement"
            type={INPUT_TYPES.amount}
            messageLabel="Medical Entitlement"
            placeholder="Enter Medical Entitlement"
            min={0}
            max={MAX_AMOUNT_LIMIT}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            name="medicalClaimed"
            label="Medical Claimed"
            type={INPUT_TYPES.amount}
            messageLabel="Medical Claimed"
            placeholder="Enter Medical Claimed"
            min={0}
            max={MAX_AMOUNT_LIMIT}
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            label="Lwp Days"
            type={INPUT_TYPES.number}
            name="lwpDays"
            messageLabel="Lwp days"
            placeholder="Enter lwp days"
          />
        </Col>

        <Col lg={6} md={8} sm={11}>
          <InputField
            label="Graduaty Prop Days"
            type={INPUT_TYPES.number}
            name="graduatyPropDays"
            messageLabel="Graduaty Prop Days"
            placeholder="Enter Graduaty Prop Days"
          />
        </Col>
      </Row>
    </>
  );
}
