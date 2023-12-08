import api from 'services/api';
import {
  GET_SUB_ACCOUNT_GROUPS_LIST,
  ADD_SUB_ACCOUNT_GROUP,
  UPDATE_SUB_ACCOUNT_GROUP,
  DELETE_SUB_ACCOUNT_GROUP,
  GET_SUB_ACCOUNT_GROUP,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getSubAccountGroupsList = async (organizationId) =>
  await api
    .get(`${GET_SUB_ACCOUNT_GROUPS_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getSubAccountGroup = async (id = '') =>
  await api.get(`${GET_SUB_ACCOUNT_GROUP}?group_account_id=${id}`);

export const addSubAccountGroup = async (body) => await api.post(ADD_SUB_ACCOUNT_GROUP, body);
export const updateSubAccountGroup = async (body) => await api.post(UPDATE_SUB_ACCOUNT_GROUP, body);

export const deleteSubAccountGroup = async (account_id) =>
  await api.delete(DELETE_SUB_ACCOUNT_GROUP, { data: { account_id } });
