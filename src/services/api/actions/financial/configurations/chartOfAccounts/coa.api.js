import api from 'services/api';
import {
  GET_COA_LIST,
  GET_COA_MAIN_ACCOUNTS_LIST,
  GET_COA,
  ADD_COA,
  UPDATE_COA,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getCOAList = async (organizationId) =>
  await api
    .get(`${GET_COA_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getMainAccountsList = async () =>
  await api.get(GET_COA_MAIN_ACCOUNTS_LIST).then((response) => resolveArray(response.data));

export const getCOA = async (id = '') => await api.get(`${GET_COA}?main_account_id=${id}`);
export const addCOA = async (body) => await api.post(ADD_COA, body);
export const updateCOA = async (body) => await api.put(UPDATE_COA, body);
