import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCOAList, addCOA, updateCOA } from './coa.api';
import { FL_CONFIG_COA_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { parseError } from 'utils/shared';
import { useSelector } from 'react-redux';
import { DEFAULT_MSG } from 'constants/shared/common';

export default function useCOAQuery() {
  const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_COA_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = useQuery({
    queryKey: [FL_CONFIG_COA_GET_LIST],
    queryFn: () => getCOAList(organization_id),
    onError: (error) => toast.error(parseError(error)),
  });

  const addRecord = useMutation({
    mutationFn: (data) => addCOA({ ...data, organization_id: organization_id.toString() }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) => updateCOA({ ...data, organization_id: organization_id.toString() }),
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
