import { Form, Switch } from 'antd';

const SwitchField = ({
  name,
  label,
  className = '',
  parentClassName = '',
  controlled = false,
  value,
  onChange,
  size = 'large',
  disabled = false,
}) => {
  const handleChange = (e) => onChange(e.target.checked);

  const attributes = () => {
    const obj = {
      className: `antd_input_switch_custom ${className}`,
      size,
      disabled,
    };

    if (controlled) {
      obj.checked = value;
      obj.onChange = handleChange;
    }

    return obj;
  };

  return (
    <Form.Item name={name} label={label} valuePropName="checked" className={parentClassName}>
      <Switch {...attributes()} />
    </Form.Item>
  );
};

export default SwitchField;
