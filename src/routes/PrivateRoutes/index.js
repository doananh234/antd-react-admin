import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { flatMap, map } from 'lodash';
import { withNamespaces } from 'react-i18next';
import PrivateLayout from '../../layout/PrivateLayout';
import UserTypes from '../../pages/UserTypes';
import Staff from '../../pages/Users';
import Home from '../../pages/Dashboard';
import Settings from '../../pages/Settings';

const routes = [
  {
    path: '/userTypes',
    routes: [
      {
        path: '/',
        component: UserTypes.List,
      },
      {
        path: '/create',
        component: UserTypes.Create,
      },
      {
        path: '/:id/edit',
        component: UserTypes.Edit,
      },
    ],
  },
  {
    path: '/staff',
    routes: [
      {
        path: '/',
        component: Staff.List,
      },
      {
        path: '/create',
        component: Staff.Create,
      },
      {
        path: '/:id/edit',
        component: Staff.Edit,
      },
    ],
    hasPrivateLayoutWrapper: true,
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
  route => <PrivateRoute {...route} key={route.path} />,
);

function PrivateRoute({
  component: Component,
  title,
  hasPrivateLayoutWrapper,
  ...rest
}) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={
        props =>
          isAuthenticated ? (
            <PrivateLayout
              title={title}
              hasPrivateLayoutWrapper={hasPrivateLayoutWrapper}
            >
              <Component {...props} />
            </PrivateLayout>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                // eslint-disable-next-line
                state: { from: props.location },
              }}
            />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  title: PropTypes.string,
  hasPrivateLayoutWrapper: PropTypes.bool,
};

const PrivateRoutes = () => wrappedRoutes;

export default PrivateRoutes;
