import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { requestEpisodeById } from '../../modules/episode';

const withEpisodeDetails = ViewComponent => props => {
  const dispatch = useDispatch();
  const { showId, seasonId, episodeId } = useParams();

  useEffect(
    () => {
      dispatch(requestEpisodeById({ showId, seasonId, episodeId }))
    },
    []
  );

  return (
    <ViewComponent {...props} />
  )
};
