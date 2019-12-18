import axios from 'axios';

const httpClient = axios.create();
const apiHost = 'http://api.tvmaze.com';

export const getShows = (page = 1) => httpClient(`${apiHost}/shows?page=${page}`);
export const getSeasonsByShowId = showId => httpClient(`${apiHost}/shows/${showId}/seasons`);
export const getEpisodesBySeasonId = seasonId => httpClient(`${apiHost}/seasons/${seasonId}/episodes`);
export const getEpisode = ({ showId, seasonId, episodeNumber }) => httpClient(
  `${apiHost}/shows/${showId}/episodebynumber?season=${seasonId}&number=${episodeNumber}`
);
export const getEpisodesByShow = showId => httpClient(`http://api.tvmaze.com/shows/${showId}/episodes`);
