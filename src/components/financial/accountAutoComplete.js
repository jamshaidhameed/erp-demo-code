import { useMainAccountsQuery } from 'services/api/actions/financial/configurations';
import AutoCompleteInput from 'shared/controls/inputs/autoComplete';

const AccountAutoComplete = ({
  // name,
  label = 'Main Account',
  messageLabel = 'Main Account',
  placeholder = 'Search Main Account',
  controlled = true,
  required = false,
  value,
  onChange,
}) => {
  const { getList } = useMainAccountsQuery();
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
    />
  );
};

export default AccountAutoComplete;
