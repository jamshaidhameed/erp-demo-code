import { Form, Button } from 'antd';

export function AuthButton({
  label,
  onClick,
  htmlType = 'submit',
  loading = false,
  className = '',
}) {
  return (
    <Form.Item>
      <Button
        className={`antd_authButton_custom ${className}`}
        htmlType={htmlType}
        loading={loading}
        onClick={onClick}>
        {loading ? '' : label}
      </Button>
    </Form.Item>
  );
}
