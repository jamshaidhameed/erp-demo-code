import { UPDATE_AUTH, LOGOUT } from '../../types';

export const updateAuth = (payload) => ({ type: UPDATE_AUTH, payload });
export const logout = (payload) => ({ type: LOGOUT, payload });
