import { resolveArray } from 'utils/shared/list';
import api from 'services/api';
import { GET_COST_CENTRE_LIST } from 'services/api/endPoints/ams';

export const getCostCentreSelectList = async () =>
  await api.get(GET_COST_CENTRE_LIST).then((response) => resolveArray(response.data));
