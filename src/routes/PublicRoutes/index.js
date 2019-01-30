import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../pages/Login';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];

const PublicRoutes = () => (
  <Switch>
    {routes.map(route => <Route {...route} key={route.path} />)}
  </Switch>
  );

export default PublicRoutes;
