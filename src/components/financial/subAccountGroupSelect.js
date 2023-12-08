import React from 'react';
import { useSubAccountGroupsQuery } from 'services/api/actions/financial/configurations';
import SelectField from 'shared/controls/inputs/selectField';

const SubAccountGroupSelect = ({ name, required, disabled = false, value, onChange }) => {
  const { getList } = useSubAccountGroupsQuery();
  const resolvedData = getList.isError ? [] : getList?.data || [];

  const handleChange = (val) => onChange(resolvedData.find((item) => item.OID === val));

  return (
    <SelectField
      fieldNames={{ label: 'ST_SUB_ACCOUNT_GROUP_DESC', value: 'OID' }}
      name={name}
      label="Sub Account Group"
      messageLabel="sub account group"
      options={resolvedData}
      placeholder="Select sub account group"
      loading={getList.isLoading}
      required={required}
      disabled={disabled}
      value={value}
      onChange={handleChange}
    />
  );
};

export default SubAccountGroupSelect;
