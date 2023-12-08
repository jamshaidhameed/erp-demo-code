import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Layout from './layout';
import ShowLoader from './loader';
import Auth from './auth';
import Configs from './configs';

const persistLayout = {
  key: 'Layout',
  storage,
};

const persistAuth = {
  key: 'Auth',
  storage,
};

const persistConfigs = {
  key: 'Configs',
  storage,
};

const persistedLayout = persistReducer(persistLayout, Layout);
const persistedAuth = persistReducer(persistAuth, Auth);
const persistedConfigs = persistReducer(persistConfigs, Configs);

export default {
  auth: persistedAuth,
  layout: persistedLayout,
  showLoader: ShowLoader,
  configs: persistedConfigs,
};
