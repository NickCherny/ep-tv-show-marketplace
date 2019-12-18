import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SHOWS, CURRENT_SHOW, CURRENT_EPISODE_BY_SHOW } from './utils/nav';
import ShowsListPage from './components/pages/ListShow';
import EpisodePage from './components/pages/Episode';
import ShowDetailsPage from './components/pages/ShowDetailsPage';

const PageRouter = () => (
  <Switch>
    <Route path={CURRENT_EPISODE_BY_SHOW} component={EpisodePage} />
    <Route path={CURRENT_SHOW} component={ShowDetailsPage} />
    <Route path={SHOWS} component={ShowsListPage} />
    <Route component={ShowsListPage}/>
  </Switch>
);

export default PageRouter;
