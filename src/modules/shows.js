import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { schema, normalize } from 'normalizr';
import set from 'lodash/fp/set';
import flowRight from 'lodash/flowRight';
import get from 'lodash/get';

import { createFetchAction } from '../utils/action';
import { getShows, getEpisodesByShow } from '../utils/api';

const initializeState = {
  items: {},
  entities: null
};

export const requestShowsList = createFetchAction({
  prefix: 'SHOW_LIST',
  request: async () => {
    try {
      const { data: shows } = await getShows();

      const data = await Promise.all(shows.map(async (item) => {
        const { data: episodes } = await getEpisodesByShow(item.id);
        return {
          ...item,
          episodes,
        };
      }));

      const showsNorm = normalize(data, [new schema.Entity('shows')]);

      return Promise.resolve(showsNorm);
    } catch (e) {
      return Promise.reject(e);
    }
  }
});

const reducer = handleActions({
  [requestShowsList.RECEIVE]: (state, { payload }) => flowRight(
    set('entities.shows', payload.entities),
    set('items.shows', payload.result)
  )(state),
}, initializeState);

export const getEveryShows = createSelector(
  state => get(state, 'shows.entities.shows', {}),
  state => get(state, 'shows.items.shows', []),
  (data, ids) => {
    return ids.map(id => data[id]);
  }
);

export const getShowById = showId => state => get(
  state,
  `shows.entities.shows.${showId}`,
  null
);

export const getCurrentEpisode = ({ showId, episodeId }) => state => {
  const showData = get(state, `shows.entities.shows.${showId}`, {});
  return showData.episodes.find(({ id }) => id === episodeId);
};

export default reducer;
