import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getSubAccountGroupsList,
  addSubAccountGroup,
  updateSubAccountGroup,
  deleteSubAccountGroup,
} from './subAccountGroups.api';
import { FL_CONFIG_SAG_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useSubAccountGroupsQuery(loadList = true) {
  const organization = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_SAG_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_SAG_LIST],
        queryFn: () => getSubAccountGroupsList(organization),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const addRecord = useMutation({
    mutationFn: (data) => addSubAccountGroup({ ...data, organization }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) => updateSubAccountGroup(data),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecord = useMutation({
    mutationFn: (body) => deleteSubAccountGroup(body),
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
