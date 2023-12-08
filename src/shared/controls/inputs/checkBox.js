import React from 'react';
import { Form, Checkbox } from 'antd';

export default function CheckBox({
  name,
  label,
  className = '',
  controlled = false,
  value,
  onChange,
  disabled,
}) {
  const handleChange = (e) => onChange(e.target.checked);

  const attributes = () => {
    const obj = {
      className: `antd-input-checkbox-custom ${className}`,
      disabled,
    };

    if (controlled) {
      obj.checked = value;
      obj.onChange = handleChange;
    }

    return obj;
  };

  return (
    <Form.Item name={name} className="custom_checkbox" valuePropName="checked">
      <Checkbox {...attributes()}>{label}</Checkbox>
    </Form.Item>
  );
}
