import { useMutation } from '@tanstack/react-query';
import {
  deleteJournalVouchers,
  addJournalVoucher,
  updateJournalVoucher,
  addJournalVoucherDetail,
  updateJournalVoucherDetail,
  deleteJournalVoucherDetail,
} from './journalVouchers.api';
import { toast } from 'react-toastify';
import { DEFAULT_MSG } from 'constants/shared/common';
import { parseError } from 'utils/shared';

export default function useJournalVouchersQuery() {
  const submitRecord = useMutation({
    mutationFn: (data) => (data.voucher_id ? updateJournalVoucher(data) : addJournalVoucher(data)),
    onSuccess: () => toast.success(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteRecords = useMutation({
    mutationFn: (id) => deleteJournalVouchers(id),
    onSuccess: () => toast.success(DEFAULT_MSG.DeleteMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  // details

  const submitDetailRecord = useMutation({
    mutationFn: (data) =>
      data.voucher_detail_id ? updateJournalVoucherDetail(data) : addJournalVoucherDetail(data),
    onSuccess: () => toast.success(DEFAULT_MSG.SaveMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  const deleteDetailRecord = useMutation({
    mutationFn: (id) => deleteJournalVoucherDetail(id),
    onSuccess: () => toast.success(DEFAULT_MSG.DeleteMsg),
    onError: (error) => toast.error(parseError(error)),
  });

  return {
    deleteRecords,
    submitRecord,
    submitDetailRecord,
    deleteDetailRecord,
  };
}
