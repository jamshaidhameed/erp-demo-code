import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getCashMasterList,
  addCashMaster,
  updateCashMaster,
  deleteCashMaster,
} from './cashMaster.api';
import { FL_CONFIG_CASH_MASTER_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useCashMasterQuery(loadList = true) {
  const state = useSelector((state) => state);
  const { location: organization_id } = state.configs;
  const { USER_ID: user_id } = state.auth.user;
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_CASH_MASTER_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_CASH_MASTER_LIST],
        queryFn: () => getCashMasterList(organization_id),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const addRecord = useMutation({
    mutationFn: (data) => addCashMaster({ ...data, organization_id, user_id }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) => updateCashMaster({ ...data, user_id }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecord = useMutation({
    mutationFn: (ids) => deleteCashMaster(ids),
    onSuccess: () => refreshData(DEFAULT_MSG.DeleteMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    addRecord,
    updateRecord,
    deleteRecord,
    invalidateList,
  };
}
