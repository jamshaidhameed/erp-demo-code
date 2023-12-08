import React from 'react';
import { Form, Radio } from 'antd';

export default function RadioInput({
  name,
  label,
  className = '',
  controlled = false,
  checked,
  onClick,
}) {
  const attributes = () => {
    const obj = {
      className: `antd-input-radio-custom ${className}`,
    };

    if (controlled) {
      obj.checked = checked;
      obj.onClick = onClick;
    }

    return obj;
  };

  return (
    <Form.Item name={name} valuePropName="checked">
      <Radio {...attributes()}>{label}</Radio>
    </Form.Item>
  );
}
