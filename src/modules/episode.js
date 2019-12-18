import { handleActions } from 'redux-actions';

import { createFetchAction } from '../utils/action';
import { getEpisode } from '../utils/api';

const initialState = {
  items: [],
  data: null,
};

export const requestEpisodeById = createFetchAction({
  prefix: 'EPISODE',
  request: payload => getEpisode(payload),
  mapPayload: [
    ({ data }) => data
  ]
});

const reduce = handleActions({
  [requestEpisodeById.RECEIVE]: (state, { payload }) => ({
    ...state,
    ...payload
  })
}, initialState);

export default reduce;
