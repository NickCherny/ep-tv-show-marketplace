export const SHOWS = '/shows';
export const CURRENT_SHOW = '/show/:showId';
export const CURRENT_EPISODE_BY_SHOW = '/show/:showId/episode/:episodeId';

/**
 *
 * @param {String} showId
 * @return {string}
 */
export const createUrlForCurrentShow = showId => `/show/${showId}`;
/**
 * @param {Array[]} options
 * @param {String} options.showId
 * @param {String} options.episodeId
 * @return {string}
 */
export const createUrlForCurrentEpisode = ({ showId, episodeId }) => `/show/${showId}/episode/${episodeId}`;
