import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_BANKS_LIST,
  GET_HR_BANK,
  ADD_HR_BANK,
  DELETE_HR_BANKS,
  UPDATE_HR_BANK,
} from 'services/api/endPoints/payroll';

export const getHRBanksList = async (organizationId) =>
  await api
    .get(`${GET_HR_BANKS_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getHRBank = async (id = '') => await api.get(`${GET_HR_BANK}?id=${id}`);

export const addHRBank = async (body) => await api.post(ADD_HR_BANK, body);
export const updateHRBank = async (body) => await api.post(UPDATE_HR_BANK, body);

export const deleteHRBanks = async (id) => await api.delete(DELETE_HR_BANKS, { data: { id } });
