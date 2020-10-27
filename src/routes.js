import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/movie/:id" component={Movie} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;