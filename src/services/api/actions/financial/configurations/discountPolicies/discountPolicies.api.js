import api from 'services/api';
import {
  GET_DISCOUNT_POLICY_LIST,
  ADD_DISCOUNT_POLICY,
  GET_DISCOUNT_POLICY,
  UPDATE_DISCOUNT_POLICY,
} from 'services/api/endPoints/financial';
import { resolveArray } from 'utils/shared/list';

export const getDiscountPolicyList = async (organization_id) =>
  await api
    .post(`${GET_DISCOUNT_POLICY_LIST}?organization_id=${organization_id}`)
    .then((response) => resolveArray(response.data));

export const addDiscountPolicy = async (body) => await api.post(ADD_DISCOUNT_POLICY, body);
export const updateDiscountPolicy = async (body) => await api.post(UPDATE_DISCOUNT_POLICY, body);
export const getDiscountPolicy = async (id = '') =>
  await api.get(`${GET_DISCOUNT_POLICY}?OID=${id}`);
