import api from 'services/api';
import { GET_CURRENCY_LIST } from 'services/api/endPoints';
import { resolveArray } from 'utils/shared/list';

export const getCurrencyList = async () =>
  await api.get(GET_CURRENCY_LIST).then((response) => resolveArray(response.data));
