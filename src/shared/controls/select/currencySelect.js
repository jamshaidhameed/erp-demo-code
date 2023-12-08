import React from 'react';
import useCurrencyQuery from 'services/api/actions/shared/currency/useCurrency.query';
import SelectField from 'shared/controls/inputs/selectField';

const CurrencySelect = ({
  name,
  required,
  disabled = false,
  controlled = false,
  value,
  onChange,
}) => {
  const { getList } = useCurrencyQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const handleChange = (val) => onChange(resolvedData.find((item) => item.OID === val));

  return (
    <SelectField
      fieldNames={{ label: 'CURRENCY_CODE', value: 'OID' }}
      name={name}
      label="Currency"
      messageLabel="currency"
      options={resolvedData}
      placeholder="Select currency"
      loading={getList.isLoading}
      required={required}
      disabled={disabled}
      controlled={controlled}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CurrencySelect;
