import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getSubAccountsList,
  addSubAccount,
  updateSubAccount,
  deleteSubAccount,
} from './subAccounts.api';
import { FL_CONFIG_SAS_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useSubAccountsQuery({
  account_group_id = null,
  listKey = '',
  loadList = true,
}) {
  const organization = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_SAS_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_SAS_LIST, listKey],
        // enabled: true,
        // cacheTime: 0,
        queryFn: () => getSubAccountsList(organization, account_group_id),
        onError: (error) => toast.error(parseError(error)),
      })
    : false;

  const addRecord = useMutation({
    mutationFn: (data) => addSubAccount({ ...data, organization_id: organization }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) => updateSubAccount(data),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecord = useMutation({
    mutationFn: (body) => deleteSubAccount(body),
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
