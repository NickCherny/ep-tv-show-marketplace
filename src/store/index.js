import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import fetchMiddleware from '../utils/middlewares/fetchMiddleware';
import globalReducer from './reducers/global';
import showsReducer from "./reducers/shows";

const rootReducer = combineReducers({
  global: globalReducer,
  shows: showsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, fetchMiddleware)
);

export default store;
