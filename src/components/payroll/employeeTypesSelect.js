import React from 'react';
import { useHREmployeeTypesQuery } from 'services/api/actions/payroll/HumanResource';
import SelectField from 'shared/controls/inputs/selectField';

const EmployeeTypesSelect = ({
  name,
  required = true,
  disabled = false,
  value,
  onChange,
  mode = 'single',
  controlled = false,
  showSearch = false,
  placeholder = 'Select Employee Type',
  messageLabel = 'Employee Type',
  label = 'Employee Type',
}) => {
  const { getList } = useHREmployeeTypesQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const handleChange = (val) => {
    onChange(mode === 'multiple' ? val : resolvedData.find((item) => item.OID === val));
  };

  return (
    <SelectField
      fieldNames={{ label: 'description', value: 'id' }}
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

export default EmployeeTypesSelect;
