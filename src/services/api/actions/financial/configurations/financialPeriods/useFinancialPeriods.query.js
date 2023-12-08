import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getFinancialPeriodsList,
  addFinancialPeriod,
  updateFinancialPeriod,
} from './financialPeriods.api';
import { FL_CONFIG_FP_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useFinancialPeriodsQuery(loadList = true) {
  const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_FP_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_FP_GET_LIST],
        queryFn: () => getFinancialPeriodsList(organization_id),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const addRecord = useMutation({
    mutationFn: (data) => addFinancialPeriod({ ...data, ORGANIZATION: organization_id.toString() }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) => updateFinancialPeriod(data),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    addRecord,
    updateRecord,
    invalidateList,
  };
}
