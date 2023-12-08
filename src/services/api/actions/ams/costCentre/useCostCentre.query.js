import { useQuery } from '@tanstack/react-query';
import { getCostCentreSelectList } from './costCentre.api';
import { AMS_CC_SELECT_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { parseError } from 'utils/shared';

export default function useCostCentreQuery() {
  const getList = useQuery({
    queryKey: [AMS_CC_SELECT_LIST],
    queryFn: getCostCentreSelectList,
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
  };
}
