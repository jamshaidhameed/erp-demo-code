import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getHRDesignationsList,
  deleteHRDesignations,
  addHRDesignation,
  updateHRDesignation,
} from './designation.api';
import { PR_HR_DESIGNATIONS_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';
// import { useSelector } from 'react-redux';

export default function useHRDesignationQuery() {
  // const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([PR_HR_DESIGNATIONS_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = useQuery({
    queryKey: [PR_HR_DESIGNATIONS_GET_LIST],
    queryFn: () => getHRDesignationsList(),
    onError: (error) => toast.error(parseError(error)),
  });

  const submitRecord = useMutation({
    mutationFn: (data) => (data.id ? updateHRDesignation(data) : addHRDesignation(data)),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (id) => deleteHRDesignations(id),
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
