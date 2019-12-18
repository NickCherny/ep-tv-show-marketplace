import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import fetchMiddleware from './middlewares/fetchMiddleware';
import showsReducer from "./shows";
import episodeReducer from './episode';

const rootReducer = combineReducers({
  shows: showsReducer,
  episode: episodeReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, fetchMiddleware)
);

console.log(store.getState());

export default store;
