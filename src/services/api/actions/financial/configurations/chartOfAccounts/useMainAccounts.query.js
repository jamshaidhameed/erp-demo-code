import { useQuery } from '@tanstack/react-query';
import { getMainAccountsList } from './coa.api';
import { FL_CONFIG_COA_MAIN_ACCOUNTS_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { parseError } from 'utils/shared';

export default function useMainAccountsQuery() {
  const getList = useQuery({
    queryKey: [FL_CONFIG_COA_MAIN_ACCOUNTS_GET_LIST],
    queryFn: getMainAccountsList,
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
  };
}
