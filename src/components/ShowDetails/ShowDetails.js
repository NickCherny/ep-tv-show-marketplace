import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getShowById } from '../../store/reducers/shows';

const withShowDetails = ViewComponent => props => {
  const { showId } = useParams();
  const showPayload = useSelector(getShowById(showId));

  return Boolean(showPayload) && (
    <ViewComponent {...showPayload} {...props} />
  )
};

export default withShowDetails;
