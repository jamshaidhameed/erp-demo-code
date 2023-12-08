import api from 'services/api';
import {
  GET_GR_COA_REPORT,
  GET_GR_JV_REPORT,
  GET_GR_GL_REPORT,
  GET_GR_SL_REPORT,
  GET_GR_TB_REPORT,
  GET_GR_PL_REPORT,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getCOAReport = async (organization_ID, level = '') =>
  await api
    .get(GET_GR_COA_REPORT, { params: { level, organization_ID } })
    .then((response) => resolveArray(response.data));

export const getJVReport = async (payload) =>
  await api.post(GET_GR_JV_REPORT, payload).then((response) => resolveArray(response.data));

export const getGLReport = async (params) =>
  await api.get(GET_GR_GL_REPORT, { params }).then((response) => resolveArray(response.data));

export const getSLReport = async (params) =>
  await api.get(GET_GR_SL_REPORT, { params }).then((response) => resolveArray(response.data));

export const getTBReport = async (params) =>
  await api.get(GET_GR_TB_REPORT, { params }).then((response) => resolveArray(response.data));

export const getPLReport = async (params) => await api.get(GET_GR_PL_REPORT, { params });
