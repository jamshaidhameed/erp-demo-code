import api from 'services/api';
import {
  GET_CASH_MASTER_LIST,
  ADD_CASH_MASTER,
  UPDATE_CASH_MASTER,
  DELETE_CASH_MASTER,
  GET_CASH_MASTER,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getCashMasterList = async (organizationId) =>
  await api
    .get(`${GET_CASH_MASTER_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getCashMaster = async (id = '') => await api.get(`${GET_CASH_MASTER}?OID=${id}`);

export const addCashMaster = async (body) => await api.post(ADD_CASH_MASTER, body);

export const updateCashMaster = async (body) => await api.post(UPDATE_CASH_MASTER, body);

export const deleteCashMaster = async (OID) =>
  await api.delete(DELETE_CASH_MASTER, { data: { OID } });
