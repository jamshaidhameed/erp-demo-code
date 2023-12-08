import api from 'services/api';
import {
  GET_GLT_JV_LIST,
  GET_GLT_JV,
  ADD_GLT_JV,
  UPDATE_GLT_JV,
  DELETE_GLT_JV,
  ADD_GLT_JV_DETAIL,
  UPDATE_GLT_JV_DETAIL,
  DELETE_GLT_JV_DETAIL,
  REVERSE_GLT_JV,
} from 'services/api/endPoints/financial';

export const getJournalVouchersList = async (payload) => await api.post(GET_GLT_JV_LIST, payload);

export const getJournalVoucher = async (voucher_id = '') =>
  await api.get(GET_GLT_JV, { params: { voucher_id } });

export const reverseJournalVoucher = async (voucher_id = '') =>
  await api.get(REVERSE_GLT_JV, { params: { voucher_id } });

export const addJournalVoucher = async (body) => await api.post(ADD_GLT_JV, body);
export const updateJournalVoucher = async (body) => await api.post(UPDATE_GLT_JV, body);

export const deleteJournalVouchers = async (voucher_id) =>
  await api.get(DELETE_GLT_JV, { params: { voucher_id } });

// Detail

export const addJournalVoucherDetail = async (body) => await api.post(ADD_GLT_JV_DETAIL, body);

export const updateJournalVoucherDetail = async (body) =>
  await api.post(UPDATE_GLT_JV_DETAIL, body);

export const deleteJournalVoucherDetail = async (voucher_detail_id) =>
  await api.get(DELETE_GLT_JV_DETAIL, { params: { voucher_detail_id } });
