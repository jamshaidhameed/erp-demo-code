import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getChequeFormatList,
  addChequeFormat,
  updateChequeFormat,
  deleteChequeFormat,
} from './chequeFormat.api';
import { FL_CONFIG_CHF_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useChequeFormatQuery(loadList = true) {
  const organization_id = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_CHF_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_CHF_LIST],
        queryFn: () => getChequeFormatList(organization_id),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const addRecord = useMutation({
    mutationFn: (data) => addChequeFormat({ ...data, organization_id: organization_id.toString() }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const updateRecord = useMutation({
    mutationFn: (data) => updateChequeFormat(data),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecord = useMutation({
    mutationFn: (ids) => deleteChequeFormat(ids),
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
