import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getHREmployeeTypesList,
  deleteHREmployeeTypes,
  addHREmployeeType,
  updateHREmployeeType,
} from './employeeTypes.api';
import { PR_HR_EMPLOYEE_TYPES_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';

export default function useHREmployeeTypesQuery() {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([PR_HR_EMPLOYEE_TYPES_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = useQuery({
    queryKey: [PR_HR_EMPLOYEE_TYPES_GET_LIST],
    queryFn: getHREmployeeTypesList,
    onError: (error) => toast.error(parseError(error)),
  });

  const submitRecord = useMutation({
    mutationFn: (data) => (data.id ? updateHREmployeeType(data) : addHREmployeeType(data)),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (ids) => deleteHREmployeeTypes(ids),
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
