import { useQuery } from '@tanstack/react-query';
import { getSubAccountsByAccounts } from './subAccounts.api';
import { FL_CONFIG_SAS_BY_ACCOUNTS_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { parseError } from 'utils/shared';

export default function useSAByAccountsQuery(accountId) {
  const getList = useQuery({
    queryKey: [FL_CONFIG_SAS_BY_ACCOUNTS_LIST, accountId],
    queryFn: () => getSubAccountsByAccounts(accountId),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
  };
}
