import dayjs from 'dayjs';
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
          episodes: episodes.map(({ id, ...data }) => ({
            ...data,
            id: String(id),
          })),
        };
      }));

      const showsNorm = normalize(data, [new schema.Entity('shows')]);

      return Promise.resolve(showsNorm);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  mapMeta: () => ({
    expiresIn: dayjs().add(1000, 'minute').toDate()
  })
});

const reducer = handleActions({
  [requestShowsList.RECEIVE]: (state, { payload, meta }) => flowRight(
    set('entities.shows', payload.entities),
    set('items.shows', payload.result),
    set('meta.cache.expiresIn', meta.expiresIn),
  )(state),
}, initializeState);

export const getEveryShows = createSelector(
  state => get(state, 'shows.entities.shows.shows', null),
  state => get(state, 'shows.items.shows', null),
  (data, ids) => {
    return Array.isArray(ids) && data ? ids.map(id => data[id]) : []
  }
);

export const getShowById = showId => state => get(
  state,
  `shows.entities.shows.shows.${showId}`,
  null
);

export const getCurrentEpisode = ({ showId, episodeId }) => state => {
  const { episodes } = get(state, `shows.entities.shows.shows.${showId}`, {});
  return Array.isArray(episodes) ? episodes.find(({ id }) => id === episodeId) : null;
};

export const getCacheExpiresIn = state => get(state, 'shows.meta.cache.expiresIn', null);

export default reducer;
