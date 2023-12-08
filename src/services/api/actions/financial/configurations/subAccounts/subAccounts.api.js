import api from 'services/api';
import {
  GET_SUB_ACCOUNTS_LIST,
  GET_SUB_ACCOUNTS_BY_ACCOUNT_LIST,
  ADD_SUB_ACCOUNT,
  UPDATE_SUB_ACCOUNT,
  DELETE_SUB_ACCOUNT,
  GET_SUB_ACCOUNT,
  GET_SUB_ACCOUNT_CODE,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getSubAccountsList = async (organizationId, account_group_id) => {
  const url = account_group_id
    ? `${GET_SUB_ACCOUNTS_LIST}?organization_id=${organizationId}&account_group_id=${account_group_id}&row_size=2000`
    : `${GET_SUB_ACCOUNTS_LIST}?organization_id=${organizationId}&row_size=2000`;
  return await api.get(url).then((response) => resolveArray(response.data));
};

export const getSubAccountsByAccounts = async (id) => {
  if (!id) return [];
  return await api
    .get(GET_SUB_ACCOUNTS_BY_ACCOUNT_LIST, { params: { id } })
    .then((response) => resolveArray(response.data));
};

export const getSubAccount = async (id = '') =>
  await api.get(`${GET_SUB_ACCOUNT}?account_id=${id}`);

export const getSubAccountCode = async () => await api.get(GET_SUB_ACCOUNT_CODE);

export const addSubAccount = async (body) => await api.post(ADD_SUB_ACCOUNT, body);
export const updateSubAccount = async (body) => await api.post(UPDATE_SUB_ACCOUNT, body);

export const deleteSubAccount = async (account_id) =>
  await api.delete(DELETE_SUB_ACCOUNT, { data: { account_id } });
