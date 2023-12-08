import api from 'services/api';
import {
  GET_GENERAL_SETTING_LIST,
  ADD_GENERAL_SETTING,
  GET_GENERAL_SETTING,
  UPDATE_GENERAL_SETTING,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getGeneralSettingList = async (organization_id) =>
  await api
    .get(`${GET_GENERAL_SETTING_LIST}?organization_id=${organization_id}`)
    .then((response) => resolveArray(response.data));

export const addGeneralSetting = async (body) => await api.post(ADD_GENERAL_SETTING, body);
export const updateGeneralSetting = async (body) => await api.post(UPDATE_GENERAL_SETTING, body);
export const getGeneralSetting = async (id = '') =>
  await api.get(`${GET_GENERAL_SETTING}?general_setting_id=${id}`);
