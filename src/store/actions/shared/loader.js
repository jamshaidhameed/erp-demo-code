import { UPDATE_APP_LOADER, UPDATE_PAGE_LOADER } from '../../types';

export const updateAppLoader = (payload) => ({ type: UPDATE_APP_LOADER, payload });
export const updatePageLoader = (payload) => ({ type: UPDATE_PAGE_LOADER, payload });
