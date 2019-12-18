import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getShowById } from '../../modules/shows';

const withShowDetails = ViewComponent => props => {
  const { showId } = useParams();
  const showPayload = useSelector(getShowById(showId));

  console.log(showPayload);

  return (
    <ViewComponent {...showPayload} {...props} />
  )
};

export default withShowDetails;
