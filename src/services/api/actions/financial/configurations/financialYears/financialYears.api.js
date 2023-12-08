import api from 'services/api';
import {
  GET_FINANCIAL_YEARS_LIST,
  GET_FINANCIAL_YEAR,
  ADD_FINANCIAL_YEAR,
  UPDATE_FINANCIAL_YEAR,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getFinancialYearsList = async (organizationId) =>
  await api
    .get(`${GET_FINANCIAL_YEARS_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getFinancialYear = async (id = '') =>
  await api.get(`${GET_FINANCIAL_YEAR}?financial_year_id=${id}`);

export const addFinancialYear = async (body) => await api.post(ADD_FINANCIAL_YEAR, body);
export const updateFinancialYear = async (body) => await api.put(UPDATE_FINANCIAL_YEAR, body);
