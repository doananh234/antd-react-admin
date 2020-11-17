import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { flatMap, map } from 'lodash';
import { checkRole } from 'utils/tools';
import Home from 'pages/Dashboard';
import Profile from 'pages/Profile';
import Settings from 'pages/Settings';
import PrivateLayout from 'layout/PrivateLayout';
import Users from 'pages/Users';

const routes = [
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
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
    title: 'profile.title',
  },
  {
    path: '/settings/:model',
    component: Settings,
    exact: true,
    title: 'settings.title',
    hasPrivateLayoutWrapper: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'dashboard.title',
    hasPrivateLayoutWrapper: true,
  },
];

const wrappedRoutes = map(
  flatMap(routes, (route) => {
    if (route.routes) {
      return map(route.routes, (subRoute) => ({
        ...subRoute,
        path: route.path + subRoute.path,
        exact: subRoute.path === '/',
        hasPrivateLayoutWrapper:
          subRoute.hasPrivateLayoutWrapper !== undefined
            ? subRoute.hasPrivateLayoutWrapper
            : route.hasPrivateLayoutWrapper,
        component: subRoute.component || route.component,
      }));
    }
    return route;
  }),
  (route) => <PrivateRoute {...route} key={route.path} />,
);

function PrivateRoute({
  component: Component,
  title,
  hasPrivateLayoutWrapper,
  roles,
  ...rest
}) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  return checkRole(roles, role) ? (
    <Route
      {...rest}
      render={
        (props) =>
          isAuthenticated ? (
            <PrivateLayout
              title={title}
              hasPrivateLayoutWrapper={hasPrivateLayoutWrapper}
            >
              <Component />
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
  ) : (
    <Route render={null} />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  title: PropTypes.string,
  hasPrivateLayoutWrapper: PropTypes.bool,
  roles: PropTypes.array,
};

const PrivateRoutes = () => wrappedRoutes;

export default PrivateRoutes;
