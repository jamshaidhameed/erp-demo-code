import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_DESIGNATIONS_LIST,
  GET_HR_DESIGNATION,
  ADD_HR_DESIGNATION,
  UPDATE_HR_DESIGNATION,
  DELETE_HR_DESIGNATION,
} from 'services/api/endPoints/payroll';

export const getHRDesignationsList = async () =>
  await api.get(GET_HR_DESIGNATIONS_LIST).then((response) => resolveArray(response.data));

export const getHRDesignation = async (id = '') => await api.get(`${GET_HR_DESIGNATION}?id=${id}`);

export const addHRDesignation = async (body) => await api.post(ADD_HR_DESIGNATION, body);
export const updateHRDesignation = async (body) => await api.post(UPDATE_HR_DESIGNATION, body);

export const deleteHRDesignations = async (id) =>
  await api.delete(DELETE_HR_DESIGNATION, { data: { id } });
