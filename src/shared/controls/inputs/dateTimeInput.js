import { DatePicker, Form } from 'antd';
import React from 'react';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export default function DateTimeInput({
  label,
  name,
  messageLabel,
  placeholder,
  onChange,
  value,
  showRange = false,
  showTime = false,
  required = false,
  controlled = false,
  autoFocus = false,
  allowClear = false,
  minDate = null,
  className = '',
  disabled = false,
  popupClassName = '',
}) {
  const timeFormate = 'hh:mm:ss A';
  const dateFormate = 'MMMM D, YYYY';

  const getTimeStamp = (val) =>
    val ? (showTime ? new Date(val) : new Date(`${val} ${new Date().toLocaleTimeString()}`)) : null;

  const handleChange = (value, dateString) => onChange(getTimeStamp(dateString));

  const attributes = () => {
    const inputProps = {
      popupClassName,
      className: `antd-input-custom antd-dateInput-custom ${className}`,
      placeholder,
      autoFocus,
      allowClear,
      disabled,
      format: showTime ? `${dateFormate} ${timeFormate}` : dateFormate,
      showTime: showTime
        ? {
            format: timeFormate,
          }
        : null,
    };

    if (controlled) {
      inputProps.value = value ? dayjs(value) : null;
      inputProps.onChange = handleChange;
    }

    return inputProps;
  };

  const minimumDate = (current) => (minDate ? current < minDate : null);

  return (
    <Form.Item
      name={name}
      validateTrigger="onBlur"
      label={label}
      rules={[
        {
          required,
          message: `Please enter ${messageLabel}.`,
        },
      ]}>
      {showRange ? (
        <RangePicker {...attributes()} />
      ) : (
        <DatePicker {...attributes()} disabledDate={minimumDate} />
      )}
    </Form.Item>
  );
}
