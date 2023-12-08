import api from 'services/api';
import {
  GET_BANK_MASTER_LIST,
  ADD_BANK_MASTER,
  UPDATE_BANK_MASTER,
  DELETE_BANK_MASTER,
  GET_BANK_MASTER,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getBankMasterList = async (organizationId) =>
  await api
    .get(`${GET_BANK_MASTER_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getBankMaster = async (id = '') => await api.get(`${GET_BANK_MASTER}?OID=${id}`);

export const addBankMaster = async (body) => await api.post(ADD_BANK_MASTER, body);

export const updateBankMaster = async (body) => await api.post(UPDATE_BANK_MASTER, body);

export const deleteBankMaster = async (OID) =>
  await api.delete(DELETE_BANK_MASTER, { data: { OID } });
