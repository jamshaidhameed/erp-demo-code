import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getDefinitionsAdditionTypesList,
  deleteDefinitionsAdditionTypes,
  addDefinitionsAdditionType,
  updateDefinitionsAdditionType,
} from './additionType.api';
import { PR_DEFINITIONS_ADDITION_TYPE_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';

export default function useDesignationsAdvanceTypesQuery() {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([PR_DEFINITIONS_ADDITION_TYPE_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = useQuery({
    queryKey: [PR_DEFINITIONS_ADDITION_TYPE_GET_LIST],
    queryFn: getDefinitionsAdditionTypesList,
    onError: (error) => toast.error(parseError(error)),
  });

  const submitRecord = useMutation({
    mutationFn: (data) =>
      data.id ? updateDefinitionsAdditionType(data) : addDefinitionsAdditionType(data),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (ids) => deleteDefinitionsAdditionTypes(ids),
    onSuccess: () => refreshData(DEFAULT_MSG.DeleteMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    deleteRecords,
    submitRecord,
    invalidateList,
  };
}
