import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../pages/Login';
import ResetPassword from '../../pages/ResetPassword';
import ForgotPassword from '../../pages/ForgotPassword';
import Register from '../../pages/Register';
import Invite from '../../pages/Invite';

export const PUBLIC_ROUTES = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/invite',
    component: Invite,
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
    path: '/resetPassword',
    component: ResetPassword,
    exact: true,
  },
];

const PublicRoutes = () => PUBLIC_ROUTES.map(route => <Route {...route} key={route.path} />);

export default PublicRoutes;
