import api from 'services/api';
import {
  GET_CHEQUE_FORMAT_LIST,
  ADD_CHEQUE_FORMAT,
  UPDATE_CHEQUE_FORMAT,
  DELETE_CHEQUE_FORMAT,
  GET_CHEQUE_FORMAT,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getChequeFormatList = async (organizationId) =>
  await api
    .get(`${GET_CHEQUE_FORMAT_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getChequeFormat = async (id = '') =>
  await api.get(`${GET_CHEQUE_FORMAT}?format_id=${id}`);
export const addChequeFormat = async (body) => await api.post(ADD_CHEQUE_FORMAT, body);
export const updateChequeFormat = async (body) => await api.post(UPDATE_CHEQUE_FORMAT, body);

export const deleteChequeFormat = async (format_id) =>
  await api.delete(DELETE_CHEQUE_FORMAT, { data: { format_id } });
