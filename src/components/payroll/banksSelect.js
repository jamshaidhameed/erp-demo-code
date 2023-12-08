import React from 'react';
import { useHRBankQuery } from 'services/api/actions/payroll/HumanResource';
import SelectField from 'shared/controls/inputs/selectField';

const BankSelect = ({
  name,
  required = false,
  disabled = false,
  value,
  onChange,
  mode = 'single',
  controlled = false,
  showSearch = false,
  placeholder = 'Select Bank',
  messageLabel = 'Bank',
  label = 'Bank',
}) => {
  const { getList } = useHRBankQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const handleChange = (val) => {
    onChange(mode === 'multiple' ? val : resolvedData.find((item) => item.OID === val));
  };

  return (
    <SelectField
      fieldNames={{ label: 'bank_name', value: 'id' }}
      name={name}
      label={label}
      messageLabel={messageLabel}
      options={resolvedData}
      placeholder={placeholder}
      loading={getList.isLoading}
      required={required}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      mode={mode}
      controlled={controlled}
      showSearch={showSearch}
    />
  );
};

export default BankSelect;
