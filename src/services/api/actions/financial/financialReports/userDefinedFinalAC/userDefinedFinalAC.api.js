import api from 'services/api';
import {
  GET_FR_UDFA_LIST,
  GET_FR_UDFA,
  ADD_FR_UDFA,
  UPDATE_FR_UDFA,
  DELETE_FR_UDFA,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getUserDefinedFAList = async (organizationId) =>
  await api
    .get(`${GET_FR_UDFA_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getUserDefinedFA = async (id) => await api.get(`${GET_FR_UDFA}?id=${id}`);
export const addUserDefinedFA = async (body) => await api.post(ADD_FR_UDFA, body);
export const updateUserDefinedFA = async (body) => await api.post(UPDATE_FR_UDFA, body);
export const deleteUserDefinedFA = async (id) => await api.delete(DELETE_FR_UDFA, { data: { id } });
