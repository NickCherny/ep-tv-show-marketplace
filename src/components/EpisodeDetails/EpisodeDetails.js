import React from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCurrentEpisode } from '../../store/reducers/shows';

const withEpisodeDetails = ViewComponent => props => {
  const { showId, episodeId } = useParams();
  const episode = useSelector(getCurrentEpisode({ showId, episodeId }));

  return (
    <ViewComponent {...episode} {...props} />
  )
};

export default withEpisodeDetails;
