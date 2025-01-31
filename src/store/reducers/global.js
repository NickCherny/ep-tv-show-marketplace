import { createAction, handleActions } from 'redux-actions';
import {createSelector} from "reselect";

export const startRequest = createAction('global/REQUEST/START');

export const finishRequest = createAction('global/REQUEST/FINISH');

const initializeState = {
  requests: [],
};

const reducer = handleActions(
  {
    [startRequest]: (state, { payload }) => {
      return {
        ...state,
        requests: state.requests.concat(payload)
      }
    },
    [finishRequest]: (state, { payload }) => {
      return {
        ...state,
        requests: state.requests.filter(({ id }) => id !== payload.id),
      }
    },
  },
  initializeState
);

export const getRequests = state => state.global.requests;
export const getRequestsByActionType = type => createSelector(
  getRequests,
  (requests) => requests.filter(({ contractor }) => contractor === type),
);

export default reducer;
