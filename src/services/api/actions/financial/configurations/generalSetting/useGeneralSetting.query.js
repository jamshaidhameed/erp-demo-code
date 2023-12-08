import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getGeneralSettingList,
  addGeneralSetting,
  updateGeneralSetting,
} from './generalSetting.api';
import { FL_CONFIG_GS_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useGeneralSettingQuery(loadList = true) {
  const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_GS_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_GS_LIST],
        queryFn: () => getGeneralSettingList(organization_id),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const submitRecord = useMutation({
    mutationFn: (data) =>
      data.general_setting_id
        ? updateGeneralSetting({ ...data, organization_id })
        : addGeneralSetting({ ...data, organization_id }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    submitRecord,
    // deleteRecords,
    invalidateList,
  };
}
