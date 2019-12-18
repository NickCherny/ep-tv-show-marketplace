import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import fetchMiddleware from './middlewares/fetchMiddleware';
import globalReducer from './global';
import showsReducer from "./shows";

const rootReducer = combineReducers({
  global: globalReducer,
  shows: showsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, fetchMiddleware)
);

export default store;
