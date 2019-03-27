import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import ResetPassword from '../../pages/ResetPassword';
import ForgotPassword from '../../pages/ForgotPassword';
import Register from '../../pages/Register';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true,
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    exact: true,
  },
];

const PublicRoutes = () => (
  <Switch>
    {routes.map(route => (
      <Route {...route} key={route.path} />
    ))}
  </Switch>
);

export default PublicRoutes;
