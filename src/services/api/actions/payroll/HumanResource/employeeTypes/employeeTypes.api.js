import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_EMPLOYEE_TYPES_LIST,
  GET_HR_EMPLOYEE_TYPE,
  ADD_HR_EMPLOYEE_TYPE,
  DELETE_HR_EMPLOYEE_TYPES,
  UPDATE_HR_EMPLOYEE_TYPE,
} from 'services/api/endPoints/payroll';

export const getHREmployeeTypesList = async () =>
  await api.get(GET_HR_EMPLOYEE_TYPES_LIST).then((response) => resolveArray(response.data));

export const getHREmployeeType = async (id = '') =>
  await api.get(`${GET_HR_EMPLOYEE_TYPE}?id=${id}`);

export const addHREmployeeType = async (body) => await api.post(ADD_HR_EMPLOYEE_TYPE, body);
export const updateHREmployeeType = async (body) => await api.post(UPDATE_HR_EMPLOYEE_TYPE, body);

export const deleteHREmployeeTypes = async (id) =>
  await api.delete(DELETE_HR_EMPLOYEE_TYPES, { data: { id } });
