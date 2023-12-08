import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_EOBIS_LIST,
  GET_HR_EOBI,
  ADD_HR_EOBI,
  UPDATE_HR_EOBI,
  DELETE_HR_EOBI,
} from 'services/api/endPoints/payroll';

export const getHREobiList = async () =>
  await api.get(GET_HR_EOBIS_LIST).then((response) => resolveArray(response.data));

export const getHREobi = async (id = '') => await api.get(`${GET_HR_EOBI}?eobi_id=${id}`);

export const addHREobi = async (body) => await api.post(ADD_HR_EOBI, body);
export const updateHREobi = async (body) => await api.put(UPDATE_HR_EOBI, body);

export const deleteHREobis = async (id) =>
  await api.delete(DELETE_HR_EOBI, { data: { eobi_id: id } });
