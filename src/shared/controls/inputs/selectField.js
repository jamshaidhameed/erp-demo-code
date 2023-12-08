import { Form, Select } from 'antd';

const SelectField = ({
  label,
  name,
  messageLabel,
  placeholder = 'Select',
  onChange,
  value,
  options = [],
  required = false,
  controlled = false,
  autoFocus = false,
  allowClear = false,
  loading = false,
  className = '',
  disabled = false,
  showSearch = false,
  parentClassName = '',
  style = {},
  mode = 'single', // multiple | single
  fieldNames = { label: 'label', value: 'value' },
}) => {
  const filterOption = (input, option) =>
    (option?.[fieldNames.label] ?? '').toLowerCase().includes(input.toLowerCase());

  const attributes = () => {
    const inputProps = {
      className: `antd-selectInput-custom ${className}`,
      placeholder,
      autoFocus,
      allowClear,
      disabled,
      showSearch,
      options,
      mode,
      fieldNames,
      loading,
    };

    if (showSearch) inputProps.filterOption = filterOption;

    if (controlled) {
      inputProps.value = value;
      inputProps.onChange = onChange;
    }

    return inputProps;
  };

  return (
    <Form.Item
      name={name}
      style={style}
      className={parentClassName}
      validateTrigger="onBlur"
      label={label}
      rules={[
        {
          required,
          message: `Please select ${messageLabel}.`,
        },
      ]}>
      <Select {...attributes()} />
    </Form.Item>
  );
};

export default SelectField;
