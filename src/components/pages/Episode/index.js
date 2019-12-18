import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import { getCurrentEpisode } from '../../../modules/shows';

export default () => {
  const dispatch = useDispatch();
  const { showId, episodeId } = useParams();
  const episode = useSelector(getCurrentEpisode({ showId, episodeId }));
  return <h1>Episode</h1>
};
