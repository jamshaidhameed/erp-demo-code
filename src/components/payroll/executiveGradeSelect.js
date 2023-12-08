import React from 'react';
import { useHRExecutiveGradesQuery } from 'services/api/actions/payroll/HumanResource';
import SelectField from 'shared/controls/inputs/selectField';

const ExecutiveGradeSelect = ({
  name,
  required = false,
  disabled = false,
  value,
  onChange,
  mode = 'single',
  controlled = false,
  showSearch = false,
  placeholder = 'Select Executive Grade',
  messageLabel = 'Executive Grade',
  label = 'Executive Grade',
}) => {
  const { getList } = useHRExecutiveGradesQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const handleChange = (val) => {
    onChange(mode === 'multiple' ? val : resolvedData.find((item) => item.OID === val));
  };

  return (
    <SelectField
      fieldNames={{ label: 'name', value: 'id' }}
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

export default ExecutiveGradeSelect;
