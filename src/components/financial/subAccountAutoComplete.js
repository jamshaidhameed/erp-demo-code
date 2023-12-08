import { useSAByAccountsQuery } from 'services/api/actions/financial/configurations';
import AutoCompleteInput from 'shared/controls/inputs/autoComplete';

const SubAccountAutoComplete = ({
  // name,
  label = 'Sub Account',
  messageLabel = 'Sub Account',
  placeholder = 'Search Sub Account',
  controlled = true,
  required = false,
  value,
  onChange,
  accountId = '',
  disabled = false,
}) => {
  const { getList } = useSAByAccountsQuery(accountId);
  const resolvedData = getList.isError ? [] : getList?.data || [];

  return (
    <AutoCompleteInput
      // name={name}
      label={label}
      messageLabel={messageLabel}
      placeholder={placeholder}
      options={resolvedData}
      controlled={controlled}
      value={value?.value ?? ''}
      selectedOption={value?.option ?? null}
      defaultValue={value?.defaultValue ?? ''}
      onChange={onChange}
      loading={getList.isLoading}
      required={required}
      disabled={disabled}
    />
  );
};

export default SubAccountAutoComplete;
