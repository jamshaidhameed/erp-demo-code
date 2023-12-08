import React from 'react';
import { useVoucherTypesQuery } from 'services/api/actions/financial/configurations';
import SelectField from 'shared/controls/inputs/selectField';

const VoucherTypeSelect = ({
  name,
  required,
  disabled = false,
  value,
  showAll = false,
  onChange = () => {},
}) => {
  const { getList } = useVoucherTypesQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  if (showAll) {
    resolvedData.unshift({ ST_VOUCHER_TYPE_DESC: 'ALL', OID: 'all' });
  }

  const handleChange = (val) => onChange(resolvedData.find((item) => item.OID === val));

  return (
    <SelectField
      fieldNames={{ label: 'ST_VOUCHER_TYPE_DESC', value: 'OID' }}
      name={name}
      label="Voucher Type"
      messageLabel="voucher type"
      options={resolvedData}
      placeholder="Select voucher type"
      loading={getList.isLoading}
      required={required}
      disabled={disabled}
      controlled
      value={value}
      onChange={handleChange}
    />
  );
};

export default VoucherTypeSelect;
