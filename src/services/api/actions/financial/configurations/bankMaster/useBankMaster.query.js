import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getBankMasterList,
  addBankMaster,
  updateBankMaster,
  deleteBankMaster,
} from './bankMaster.api';
import { FL_CONFIG_BANK_MASTER_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useBankMasterQuery(loadList = true) {
  const state = useSelector((state) => state);

  const { location: organization_id } = state.configs;
  const { USER_ID: user_id } = state.auth.user;
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_BANK_MASTER_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_BANK_MASTER_LIST],
        queryFn: () => getBankMasterList(organization_id),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const submitRecord = useMutation({
    mutationFn: (data) =>
      data?.OID
        ? updateBankMaster({ ...data, user_id })
        : addBankMaster({ ...data, organization_id, user_id }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  // const updateRecord = useMutation({
  //   mutationFn: (data) => updateBankMaster({ ...data, organization }),
  //   onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
  //   onError: (error) => toast.error(parseError(error)),
  // });

  const deleteRecords = useMutation({
    mutationFn: (id) => deleteBankMaster(id),
    onSuccess: () => refreshData(DEFAULT_MSG.DeleteMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    submitRecord,
    deleteRecords,
    invalidateList,
  };
}
