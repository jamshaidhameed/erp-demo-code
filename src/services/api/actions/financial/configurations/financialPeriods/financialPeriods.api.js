import api from 'services/api';
import {
  GET_FINANCIAL_PERIODS_LIST,
  GET_FINANCIAL_PERIODS_BY_YEAR,
  ADD_FINANCIAL_PERIOD,
  UPDATE_FINANCIAL_PERIOD,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getFinancialPeriodsList = async (organizationId) =>
  await api
    .get(`${GET_FINANCIAL_PERIODS_LIST}?organization_id=${organizationId}`)
    .then((response) => resolveArray(response.data));

export const getPeriodsByYearId = async (id = '') => {
  if (!id) return [];
  return await api
    .get(`${GET_FINANCIAL_PERIODS_BY_YEAR}?financial_year_ID=${id}`)
    .then((response) => resolveArray(response.data));
};

export const addFinancialPeriod = async (body) => await api.post(ADD_FINANCIAL_PERIOD, body);
export const updateFinancialPeriod = async (body) => await api.post(UPDATE_FINANCIAL_PERIOD, body);
