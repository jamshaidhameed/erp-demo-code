import { combineReducers } from 'redux';

// Shared reducers
import sharedReducers from './shared';

const { showLoader, layout, auth, configs } = sharedReducers;

const AllReducers = combineReducers({
  auth,
  layout,
  showLoader,
  configs,
});

export default AllReducers;
