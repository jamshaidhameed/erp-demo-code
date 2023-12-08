import React from 'react';
import { useConfigBooksQuery } from 'services/api/actions/financial/configurations';
import SelectField from 'shared/controls/inputs/selectField';

const ConfigBooksSelect = ({
  name,
  required = false,
  disabled = false,
  value,
  onChange,
  mode = 'multiple',
  controlled = false,
  showSearch = true,
  placeholder = 'Select Books',
  messageLabel = 'Books',
  label = 'Books',
}) => {
  const { getList } = useConfigBooksQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const handleChange = (val) => {
    onChange(mode === 'multiple' ? val : resolvedData.find((item) => item.OID === val));
  };

  return (
    <SelectField
      fieldNames={{ label: 'ST_BOOK_DESC', value: 'OID' }}
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

export default ConfigBooksSelect;
