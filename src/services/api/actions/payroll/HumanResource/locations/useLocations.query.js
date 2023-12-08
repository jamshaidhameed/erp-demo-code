import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getHRLocationsList,
  deleteHRLocations,
  addHRLocation,
  updateHRLocation,
} from './locations.api';
import { PR_HR_LOCATIONS_GET_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';
import { useSelector } from 'react-redux';

export default function useHRLocationsQuery() {
  const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([PR_HR_LOCATIONS_GET_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = useQuery({
    queryKey: [PR_HR_LOCATIONS_GET_LIST],
    queryFn: () => getHRLocationsList(organization_id),
    onError: (error) => toast.error(parseError(error)),
  });

  const submitRecord = useMutation({
    mutationFn: (data) =>
      data.id
        ? updateHRLocation({ ...data, organization_id })
        : addHRLocation({ ...data, organization_id }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (ids) => deleteHRLocations(ids),
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
