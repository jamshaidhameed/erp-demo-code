import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getUserDefinedFAList,
  updateUserDefinedFA,
  addUserDefinedFA,
  deleteUserDefinedFA,
} from './userDefinedFinalAC.api';
import { FL_FR_UDFA_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useUserDefinedFACQuery(loadList = true) {
  const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_FR_UDFA_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_FR_UDFA_GET_LIST],
        queryFn: () => getUserDefinedFAList(organization_id),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const submitRecord = useMutation({
    mutationFn: (data) => (data.id ? updateUserDefinedFA(data) : addUserDefinedFA(data)),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecord = useMutation({
    mutationFn: (ids) => deleteUserDefinedFA(ids),
    onSuccess: () => refreshData(DEFAULT_MSG.DeleteMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const submitDetailRecord = useMutation({
    mutationFn: (data) =>
      data.voucher_detail_id ? updateUserDefinedFA(data) : updateUserDefinedFA(data),
    onSuccess: () => toast.success(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    submitRecord,
    deleteRecord,
    submitDetailRecord,
    invalidateList,
  };
}
