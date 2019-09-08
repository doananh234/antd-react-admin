import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { flatMap, map } from 'lodash';
import { withNamespaces } from 'react-i18next';
import PrivateLayout from '../../layout/PrivateLayout';
import Customers from '../../pages/Customers';

import Users from '../../pages/Users';
import Home from '../../pages/Dashboard';
import Settings from '../../pages/Settings';
import CMS from '../../containers/CMS';

const routes = [
  {
    path: '/customers',
    routes: [
      {
        path: '/',
        component: Customers.List,
      },
      {
        path: '/create',
        component: Customers.Create,
      },
      {
        path: '/:id/edit',
        component: Customers.Edit,
      },
    ],
    hasPrivateLayoutWrapper: true,
  },

  {
    path: '/users',
    routes: [
      {
        path: '/',
        component: Users.List,
      },
      {
        path: '/create',
        component: Users.Create,
      },
      {
        path: '/:id/edit',
        component: Users.Edit,
      },
    ],
    hasPrivateLayoutWrapper: true,
  },
  {
    path: '/cms-pages',
    component: CMS,
    exact: true,
    title: 'CMS.title',
  },
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'dashboard.title',
    hasPrivateLayoutWrapper: true,
  },
  {
    path: '/settings/:model',
    component: Settings,
    exact: true,
    title: 'settings.title',
    hasPrivateLayoutWrapper: true,
  },
];

const wrappedRoutes = map(
  flatMap(routes, route => {
    if (route.routes) {
      return map(route.routes, subRoute => ({
        ...subRoute,
        path: route.path + subRoute.path,
        exact: subRoute.path === '/',
        hasPrivateLayoutWrapper: route.hasPrivateLayoutWrapper,
        component: withNamespaces()(subRoute.component || route.component),
      }));
    }
    return route;
  }),
  route => <PrivateRoute {...route} key={route.path} />
);

function PrivateRoute({ component: Component, title, hasPrivateLayoutWrapper, ...rest }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <PrivateLayout title={title} hasPrivateLayoutWrapper={hasPrivateLayoutWrapper}>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

const PrivateRoutes = () => wrappedRoutes;

export default PrivateRoutes;
