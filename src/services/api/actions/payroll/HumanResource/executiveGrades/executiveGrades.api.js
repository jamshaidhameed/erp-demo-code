import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_EXECUTIVE_GRADES_LIST,
  GET_HR_EXECUTIVE_GRADE,
  ADD_HR_EXECUTIVE_GRADE,
  DELETE_HR_EXECUTIVE_GRADES,
  UPDATE_HR_EXECUTIVE_GRADE,
} from 'services/api/endPoints/payroll';

export const getHRExecutiveGradesList = async () =>
  await api.get(GET_HR_EXECUTIVE_GRADES_LIST).then((response) => resolveArray(response.data));

export const getHRExecutiveGrade = async (id = '') =>
  await api.get(`${GET_HR_EXECUTIVE_GRADE}?id=${id}`);

export const addHRExecutiveGrade = async (body) => await api.post(ADD_HR_EXECUTIVE_GRADE, body);
export const updateHRExecutiveGrade = async (body) =>
  await api.post(UPDATE_HR_EXECUTIVE_GRADE, body);

export const deleteHRExecutiveGrades = async (id) =>
  await api.delete(DELETE_HR_EXECUTIVE_GRADES, { data: { id } });
