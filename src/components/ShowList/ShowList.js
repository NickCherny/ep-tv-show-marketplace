import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid';

import { useWindowDimensions } from '../../utils/hooks';
import { getEveryShows } from '../../modules/shows';

const withShowList = ViewComponent => props => {
  const shows = useSelector(getEveryShows);
  const dimensions = useWindowDimensions();

  const items = useMemo(
    () => shows.map(item => ({
      ...item,
      uuid: uuid(),
    })),
    [shows]
  );

  return (
    <ViewComponent items={items} dimensions={dimensions} {...props} />
  )
};

export default withShowList;
