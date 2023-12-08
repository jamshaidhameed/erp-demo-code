import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_ADDITION_ADVANCE_TYPES_LIST,
  GET_ADDITION_ADVANCE_TYPE,
  ADD_ADDITION_ADVANCE_TYPE,
  DELETE_ADDITION_ADVANCE_TYPES,
  UPDATE_ADDITION_ADVANCE_TYPE,
} from 'services/api/endPoints/payroll';

export const getDefinitionsAdditionTypesList = async () =>
  await api.get(GET_ADDITION_ADVANCE_TYPES_LIST).then((response) => resolveArray(response.data));

export const getDefinitionsAdditionType = async (id = '') =>
  await api.get(`${GET_ADDITION_ADVANCE_TYPE}?id=${id}`);

export const addDefinitionsAdditionType = async (body) =>
  await api.post(ADD_ADDITION_ADVANCE_TYPE, body);

export const updateDefinitionsAdditionType = async (body) =>
  await api.post(UPDATE_ADDITION_ADVANCE_TYPE, body);

export const deleteDefinitionsAdditionTypes = async (id) =>
  await api.delete(DELETE_ADDITION_ADVANCE_TYPES, { data: { id } });
