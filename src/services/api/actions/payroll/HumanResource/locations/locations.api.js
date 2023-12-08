import api from 'services/api';
import { resolveArray } from 'utils/shared/list';
import {
  GET_HR_LOCATIONS_LIST,
  GET_HR_LOCATION,
  ADD_HR_LOCATION,
  DELETE_HR_LOCATIONS,
  UPDATE_HR_LOCATION,
} from 'services/api/endPoints/payroll';

export const getHRLocationsList = async (organizationId) =>
  await api
    .get(`${GET_HR_LOCATIONS_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getHRLocation = async (id = '') => await api.get(`${GET_HR_LOCATION}?id=${id}`);
export const addHRLocation = async (body) => await api.post(ADD_HR_LOCATION, body);
export const updateHRLocation = async (body) => await api.put(UPDATE_HR_LOCATION, body);

export const deleteHRLocations = async (id) =>
  await api.delete(DELETE_HR_LOCATIONS, { data: { id } });
