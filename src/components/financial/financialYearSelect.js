import SelectField from 'shared/controls/inputs/selectField';

const FinancialYearSelect = ({
  name,
  data,
  loading = false,
  required,
  disabled = false,
  value,
  onChange,
  controlled = true,
}) => {
  const handleChange = (val) => onChange(data.find((item) => item.OID === val));

  return (
    <SelectField
      fieldNames={{ label: 'ST_YEAR_CODE', value: 'OID' }}
      name={name}
      label="Financial Year"
      messageLabel="financial year"
      options={data}
      placeholder="Select financial year"
      loading={loading}
      required={required}
      disabled={disabled}
      controlled={controlled}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FinancialYearSelect;
