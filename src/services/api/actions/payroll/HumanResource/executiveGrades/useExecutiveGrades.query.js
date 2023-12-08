import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getHRExecutiveGradesList,
  deleteHRExecutiveGrades,
  addHRExecutiveGrade,
  updateHRExecutiveGrade,
} from './executiveGrades.api';
import { PR_HR_EXECUTIVE_GRADES_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';

export default function useHRExecutiveGradesQuery(loadList = true) {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([PR_HR_EXECUTIVE_GRADES_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [PR_HR_EXECUTIVE_GRADES_GET_LIST],
        queryFn: getHRExecutiveGradesList,
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const submitRecord = useMutation({
    mutationFn: (data) => (data.id ? updateHRExecutiveGrade(data) : addHRExecutiveGrade(data)),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (ids) => deleteHRExecutiveGrades(ids),
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
