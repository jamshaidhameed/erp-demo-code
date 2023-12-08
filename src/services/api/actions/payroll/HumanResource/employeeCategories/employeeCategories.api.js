import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_EMPLOYEE_CATEGORIES_LIST,
  GET_HR_EMPLOYEE_CATEGORY,
  ADD_HR_EMPLOYEE_CATEGORY,
  DELETE_HR_EMPLOYEE_CATEGORIES,
  UPDATE_HR_EMPLOYEE_CATEGORY,
} from 'services/api/endPoints/payroll';

export const getHREmployeeCategoriesList = async () =>
  await api.get(GET_HR_EMPLOYEE_CATEGORIES_LIST).then((response) => resolveArray(response.data));

export const getHREmployeeCategory = async (id = '') =>
  await api.get(`${GET_HR_EMPLOYEE_CATEGORY}?id=${id}`);

export const addHREmployeeCategory = async (body) => await api.post(ADD_HR_EMPLOYEE_CATEGORY, body);
export const updateHREmployeeCategory = async (body) =>
  await api.post(UPDATE_HR_EMPLOYEE_CATEGORY, body);

export const deleteHREmployeeCategories = async (id) =>
  await api.delete(DELETE_HR_EMPLOYEE_CATEGORIES, { data: { id } });
