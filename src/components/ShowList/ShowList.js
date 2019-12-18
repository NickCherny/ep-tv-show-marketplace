import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid';

import { requestShowsList, getEveryShows } from '../../modules/shows';

const withShowList = ViewComponent => props => {
  const dispatch = useDispatch();
  const shows = useSelector(getEveryShows);

  debugger;

  useEffect(() => {
    dispatch(requestShowsList());
  }, []);

  const items = useMemo(
    () => shows.map(item => ({ ...item, uuid: uuid() })),
    [shows]
  );

  return (
    <ViewComponent items={items} {...props} />
  )
};

export default withShowList;
