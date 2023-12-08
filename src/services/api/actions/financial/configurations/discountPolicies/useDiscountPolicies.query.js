import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getDiscountPolicyList,
  addDiscountPolicy,
  updateDiscountPolicy,
} from './discountPolicies.api';
import { FL_CONFIG_DP_LIST } from '../queryKeys';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { useSelector } from 'react-redux';
import { parseError } from 'utils/shared';

export default function useDiscountPolicyQuery(loadList = true) {
  const organization = useSelector((state) => state.configs.location);
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries([FL_CONFIG_DP_LIST]);
  };

  const refreshData = (msg) => {
    invalidateList();
    toast.success(msg);
  };

  const getList = loadList
    ? useQuery({
        queryKey: [FL_CONFIG_DP_LIST],
        queryFn: () => getDiscountPolicyList(organization),
        onError: (error) => toast.error(parseError(error)),
      })
    : [];

  const submitRecord = useMutation({
    mutationFn: (data) =>
      data.OID
        ? updateDiscountPolicy({ ...data, organization_id: organization })
        : addDiscountPolicy({ ...data, organization_id: organization }),
    onSuccess: () => refreshData(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  // const deleteRecords = useMutation({
  //   mutationFn: (ids) => deleteVoucherType(ids),
  //   onSuccess: () => refreshData(DEFAULT_MSG.DeleteMsg),
  //   onError: (error) => toast.error(parseError(error)),
  // });

  return {
    getList,
    submitRecord,
    // deleteRecords,
    invalidateList,
  };
}
