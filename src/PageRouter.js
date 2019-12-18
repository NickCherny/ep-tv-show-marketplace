import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShowsListPage from './components/pages/ListShow';
import EpisodePage from './components/pages/Episode';
import ShowDetailsPage from './components/pages/ShowDetailsPage';

const PageRouter = () => (
  <Switch>
    <Route path="/shows-list" component={ShowsListPage} />
    <Route path="/show/:showId/episode/:episodeId" component={EpisodePage} />
    <Route path="/show/:showId" component={ShowDetailsPage} />
  </Switch>
);

export default PageRouter;
