import { useQuery } from '@tanstack/react-query';
import { getPeriodsByYearId } from './financialPeriods.api';
import { FL_CONFIG_FP_BY_YEAR_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { parseError } from 'utils/shared';

export default function usePeriodsByYearQuery(yearId) {
  const getList = useQuery({
    queryKey: [FL_CONFIG_FP_BY_YEAR_GET_LIST, yearId],
    queryFn: () => getPeriodsByYearId(yearId),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
  };
}
