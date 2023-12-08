import { legacy_createStore as createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AllReducers from './reducers';

export const store = createStore(AllReducers, applyMiddleware(thunk));
export const persister = persistStore(store);
