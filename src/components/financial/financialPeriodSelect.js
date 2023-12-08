import React from 'react';
import { usePeriodsByYearQuery } from 'services/api/actions/financial/configurations';
import SelectField from 'shared/controls/inputs/selectField';

const FinancialPeriodSelect = ({
  name,
  required,
  disabled = false,
  value,
  onChange,
  yearId,
  controlled = true,
}) => {
  const { getList } = usePeriodsByYearQuery(yearId);
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const handleChange = (val) => onChange(resolvedData.find((item) => item.OID === val));

  return (
    <SelectField
      fieldNames={{ label: 'ST_PERIOD_DESC', value: 'OID' }}
      label="Financial Period"
      messageLabel="financial period"
      placeholder="Select financial period"
      options={resolvedData}
      name={name}
      loading={getList.isLoading}
      required={required}
      disabled={disabled}
      controlled={controlled}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FinancialPeriodSelect;
