import axios from 'axios';
import { store } from 'store';
import { logout } from 'store/actions/shared';
import { toast } from 'react-toastify';
import { statusCodes, DEFAULT_MSG } from 'constants/shared/common';

const api = axios.create();

api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';

  const storeState = store.getState();
  const { token } = storeState.auth;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response?.data?.meta?.code === statusCodes.OK) return response.data;
    if (response?.data?.meta?.code === statusCodes.UNAUTHORIZED) {
      toast.error(DEFAULT_MSG.InvalidSession);
      store.dispatch(logout());
    }
    return Promise.reject(new Error(response?.data?.meta?.message || DEFAULT_MSG.StandardErrorMsg));
  },
  (error) => {
    if (error.response?.status === statusCodes.UNAUTHORIZED) {
      toast.error(DEFAULT_MSG.InvalidSession);
      store.dispatch(logout());
    }

    return Promise.reject(error);
  }
);

export default api;
