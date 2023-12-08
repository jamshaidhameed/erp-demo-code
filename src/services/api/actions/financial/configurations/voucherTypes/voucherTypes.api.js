import api from 'services/api';
import {
  GET_VOUCHER_TYPES_LIST,
  ADD_VOUCHER_TYPE,
  UPDATE_VOUCHER_TYPE,
  DELETE_VOUCHER_TYPE,
  GET_VOUCHER_TYPE,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getVoucherTypesList = async (organizationId) =>
  await api
    .get(`${GET_VOUCHER_TYPES_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getVoucherType = async (id = '') =>
  await api.get(`${GET_VOUCHER_TYPE}?voucher_id=${id}`);

export const addVoucherType = async (body) => await api.post(ADD_VOUCHER_TYPE, body);
export const updateVoucherType = async (body) => await api.post(UPDATE_VOUCHER_TYPE, body);

export const deleteVoucherType = async (voucherIds) =>
  await api.delete(DELETE_VOUCHER_TYPE, { data: { voucher_id: voucherIds } });
