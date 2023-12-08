import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCurrencyList } from './currency.api';
import { SHARED_CURRENCY_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { parseError } from 'utils/shared';

export default function useCurrencyQuery() {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([SHARED_CURRENCY_GET_LIST]);
  };

  const getList = useQuery({
    queryKey: [SHARED_CURRENCY_GET_LIST],
    queryFn: getCurrencyList,
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    invalidateList,
  };
}
