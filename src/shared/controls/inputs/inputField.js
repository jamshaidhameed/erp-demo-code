import { Form, Input, InputNumber } from 'antd';
import { DEFAULT_INPUT_DIGITS_LENGTH, INPUT_TYPES } from 'constants/shared/common';
const { TextArea } = Input;

export function InputField({
  type,
  label,
  name,
  messageLabel,
  placeholder,
  onChange,
  value = '',
  controlled = false,
  required = false,
  autoFocus = false,
  className = '',
  parentClassName = '',
  prefix = null,
  disabled = false,
  allowSc = true,
  inputLength = DEFAULT_INPUT_DIGITS_LENGTH,
  onlyNumbers = false,
  min = null,
  max = null,
}) {
  const rules = () => {
    const initialRules = [
      {
        required,
        message: `Please enter ${messageLabel}.`,
      },
    ];

    if (type === INPUT_TYPES.email) {
      initialRules.push({
        type: INPUT_TYPES.email,
        message: `Please enter a valid ${messageLabel}.`,
      });
    }

    if (inputLength) {
      initialRules.push({
        pattern: new RegExp(`^.{0,${inputLength}}$`),
        message: `${label} can't be greater than ${inputLength} digit(s).`,
      });
    }

    if (onlyNumbers) {
      initialRules.push({
        pattern: new RegExp(/^[0-9]*$/),
        message: `Only numbers allowed.`,
      });
    }

    if (!allowSc) {
      initialRules.push({
        pattern: new RegExp(/^[a-zA-Z0-9 ]*$/),
        message: 'Special characters are not allowed.',
      });
    }

    return initialRules;
  };

  const attributes = () => {
    const obj = {
      className: `${
        type === INPUT_TYPES.phone ? 'antd-input-phone-custom' : 'antd-input-custom'
      } ${className}`,
      placeholder,
      autoFocus,
      prefix,
      autoComplete: 'off',
      disabled,
    };

    if (min !== null) obj.min = min;
    if (max !== null) obj.max = max;

    if (type === INPUT_TYPES.phone) {
      obj.addonBefore = '+92';
    }

    if (type === INPUT_TYPES.amount) {
      obj.formatter = (value) =>
        value.replace(/^(\d+.?\d{0,2})\d*$/, '$1').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      obj.parser = (value) => value?.replace(/\$\s?|(,*)/g, '');
    }

    if (controlled) {
      obj.value = value;
      obj.onChange = onChange;
    }

    return obj;
  };

  return (
    <Form.Item
      className={parentClassName}
      name={name}
      validateTrigger="onBlur"
      label={label}
      rules={rules()}>
      {type === INPUT_TYPES.number || type === INPUT_TYPES.amount || type === INPUT_TYPES.phone ? (
        <InputNumber {...attributes()} controls={false} />
      ) : type === INPUT_TYPES.password ? (
        <Input.Password {...attributes()} />
      ) : type === INPUT_TYPES.textArea ? (
        <TextArea
          {...attributes()}
          style={{
            height: 120,
          }}
        />
      ) : (
        <Input {...attributes()} />
      )}
    </Form.Item>
  );
}
