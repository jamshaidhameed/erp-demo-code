import { Form } from 'antd';

export default function FormElement({
  form,
  name,
  onSubmit,
  initialValues,
  className = '',
  children,
  onFieldsChange,
}) {
  return (
    <Form
      form={form}
      name={name}
      onFinish={onSubmit}
      initialValues={initialValues}
      layout="vertical"
      requiredMark={false}
      size="large"
      scrollToFirstError
      className={`antd-form-custom ${className}`}
      onFieldsChange={onFieldsChange}>
      {children}
    </Form>
  );
}
