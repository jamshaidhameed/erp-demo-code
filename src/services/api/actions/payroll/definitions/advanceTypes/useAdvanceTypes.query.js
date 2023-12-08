import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getDefinitionsAdvanceTypesList,
  deleteDefinitionsAdvanceTypes,
  addDefinitionsAdvanceType,
  updateDefinitionsAdvanceType,
} from './advanceTypes.api';
import { PR_DEFINITIONS_ADVANCE_TYPES_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';

export default function useDesignationsAdvanceTypesQuery() {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([PR_DEFINITIONS_ADVANCE_TYPES_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = useQuery({
    queryKey: [PR_DEFINITIONS_ADVANCE_TYPES_GET_LIST],
    queryFn: getDefinitionsAdvanceTypesList,
    onError: (error) => toast.error(parseError(error)),
  });

  const submitRecord = useMutation({
    mutationFn: (data) =>
      data.id ? updateDefinitionsAdvanceType(data) : addDefinitionsAdvanceType(data),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (ids) => deleteDefinitionsAdvanceTypes(ids),
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
