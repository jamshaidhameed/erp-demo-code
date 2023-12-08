import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_EMPLOYEE_BASIC_INFO_LIST,
  GET_HR_EMPLOYEE_BASIC_INFO,
  ADD_HR_EMPLOYEE_BASIC_INFO,
  DELETE_HR_EMPLOYEE_BASIC_INFO,
  UPDATE_HR_EMPLOYEE_BASIC_INFO,
} from 'services/api/endPoints/payroll';

export const getHREmployeeBasicInfoList = async () =>
  await api.get(GET_HR_EMPLOYEE_BASIC_INFO_LIST).then((response) => resolveArray(response.data));

export const getHREmployeeBasicInfo = async (id = '') =>
  await api.get(`${GET_HR_EMPLOYEE_BASIC_INFO}?id=${id}`);

export const addHREmployeeBasicInfo = async (body) =>
  await api.post(ADD_HR_EMPLOYEE_BASIC_INFO, body);
export const updateHREmployeeBasicInfo = async (body) =>
  await api.post(UPDATE_HR_EMPLOYEE_BASIC_INFO, body);

export const deleteHREmployeeBasicInfo = async (id) =>
  await api.delete(DELETE_HR_EMPLOYEE_BASIC_INFO, { data: { id } });
