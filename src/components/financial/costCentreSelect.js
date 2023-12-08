import React from 'react';
import SelectField from 'shared/controls/inputs/selectField';

const CostCentreSelect = ({
  name,
  controlled = false,
  required,
  allowClear,
  disabled = false,
  value,
  onChange,
  options,
  loading = false,
}) => {
  const handleChange = (val) => onChange(options.find((item) => item.id === val));

  return (
    <SelectField
      fieldNames={{ label: 'title', value: 'id' }}
      name={name}
      label="Cost Centre"
      messageLabel="cost centre"
      options={options}
      placeholder="Select cost centre"
      loading={loading}
      required={required}
      allowClear={allowClear}
      disabled={disabled}
      controlled={controlled}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CostCentreSelect;
