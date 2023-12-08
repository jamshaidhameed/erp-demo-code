import { store } from 'store';

const storeState = store.getState();
const amsBaseUrl = storeState.configs.apiBaseUrls.ams;
const PREFIX = `${amsBaseUrl}/api/ams`;

// Cost Centre
export const GET_COST_CENTRE_LIST = `${PREFIX}/cost-centre/get`;
