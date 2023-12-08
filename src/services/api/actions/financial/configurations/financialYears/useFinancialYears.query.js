import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getFinancialYearsList, addFinancialYear, updateFinancialYear } from './financialYears.api';
import { FL_CONFIG_FY_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';
import { useSelector } from 'react-redux';

export default function useFinancialYearsQuery() {
  const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_FY_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = useQuery({
    queryKey: [FL_CONFIG_FY_GET_LIST],
    queryFn: () => getFinancialYearsList(organization_id),
    onError: (error) => toast.error(parseError(error)),
  });

  const addRecord = useMutation({
    mutationFn: (data) =>
      addFinancialYear({ ...data, organization_id: organization_id.toString() }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) =>
      updateFinancialYear({ ...data, organization_id: organization_id.toString() }),
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
