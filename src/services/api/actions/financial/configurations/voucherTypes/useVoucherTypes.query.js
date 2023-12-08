import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getVoucherTypesList,
  addVoucherType,
  updateVoucherType,
  deleteVoucherType,
} from './voucherTypes.api';
import { FL_CONFIG_VT_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useVoucherTypesQuery(loadList = true) {
  const organization = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_VT_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_VT_LIST],
        queryFn: () => getVoucherTypesList(organization),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const addRecord = useMutation({
    mutationFn: (data) => addVoucherType({ ...data, organization }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) => updateVoucherType({ ...data, organization }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (ids) => deleteVoucherType(ids),
    onSuccess: () => refreshData(DEFAULT_MSG.DeleteMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    getList,
    addRecord,
    updateRecord,
    deleteRecords,
    invalidateList,
  };
}
