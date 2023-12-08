import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_DEFINITIONS_ADVANCE_TYPES_LIST,
  GET_DEFINITIONS_ADVANCE_TYPE,
  ADD_DEFINITIONS_ADVANCE_TYPE,
  DELETE_DEFINITIONS_ADVANCE_TYPES,
  UPDATE_DEFINITIONS_ADVANCE_TYPE,
} from 'services/api/endPoints/payroll';

export const getDefinitionsAdvanceTypesList = async () =>
  await api.get(GET_DEFINITIONS_ADVANCE_TYPES_LIST).then((response) => resolveArray(response.data));

export const getDefinitionsAdvanceType = async (id = '') =>
  await api.get(`${GET_DEFINITIONS_ADVANCE_TYPE}?id=${id}`);

export const addDefinitionsAdvanceType = async (body) =>
  await api.post(ADD_DEFINITIONS_ADVANCE_TYPE, body);

export const updateDefinitionsAdvanceType = async (body) =>
  await api.post(UPDATE_DEFINITIONS_ADVANCE_TYPE, body);

export const deleteDefinitionsAdvanceTypes = async (id) =>
  await api.delete(DELETE_DEFINITIONS_ADVANCE_TYPES, { data: { id } });
