import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { t } from 'i18next';
import { flatMap, map } from 'lodash';
import PrivateLayout from '../../layout/PrivateLayout';
import Companies from '../../pages/Companies';
import ActivityTypes from '../../pages/ActivityTypes';
import Titles from '../../pages/Titles';
import Departments from '../../pages/Departments';
import Statuses from '../../pages/Statuses';
import Projects from '../../pages/Projects';
import Users from '../../pages/Users';
import ProductTypes from '../../pages/ProductTypes';
import Home from '../../pages/Dashboard';
import Settings from '../../pages/Settings';
import Clients from '../../pages/Clients';

const routes = [

  {
    path: '/companies',
    routes: [
      {
        path: '/',
        component: Companies.List,
      },
      {
        path: '/create',
        component: Companies.Create,
      },
      {
        path: '/:id/edit',
        component: Companies.Edit,
      },
    ],
  },
  {
    path: '/clients',
    routes: [
      {
        path: '/',
        component: Clients.List,
      },
      {
        path: '/create',
        component: Clients.Create,
      },
      {
        path: '/:id/edit',
        component: Clients.Edit,
      },
    ],
  },
  {
    path: '/activityTypes',
    routes: [
      {
        path: '/',
        component: ActivityTypes.List,
      },
      {
        path: '/create',
        component: ActivityTypes.Create,
      },
      {
        path: '/:id/edit',
        component: ActivityTypes.Edit,
      },
    ],
  },

  {
    path: '/titles',
    routes: [
      {
        path: '/',
        component: Titles.List,
      },
      {
        path: '/create',
        component: Titles.Create,
      },
      {
        path: '/:id/edit',
        component: Titles.Edit,
      },
    ],
  },
  {
    path: '/departments',
    routes: [
      {
        path: '/',
        component: Departments.List,
      },
      {
        path: '/create',
        component: Departments.Create,
      },
      {
        path: '/:id/edit',
        component: Departments.Edit,
      },
    ],
  },
  {
    path: '/statuses',
    routes: [
      {
        path: '/',
        component: Statuses.List,
      },
      {
        path: '/create',
        component: Statuses.Create,
      },
      {
        path: '/:id/edit',
        component: Statuses.Edit,
      },
    ],
  },
  {
    path: '/projects',
    routes: [
      {
        path: '/',
        component: Projects.List,
      },
      {
        path: '/create',
        component: Projects.Create,
      },
      {
        path: '/:id/edit',
        component: Projects.Edit,
      },
    ],
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
  },

  {
    path: '/productTypes',
    routes: [
      {
        path: '/',
        component: ProductTypes.List,
      },
      {
        path: '/create',
        component: ProductTypes.Create,
      },
      {
        path: '/:id/edit',
        component: ProductTypes.Edit,
      },
    ],
  },

  {
    path: '/productTypes',
    routes: [
      {
        path: '/',
        component: ProductTypes.List,
      },
      {
        path: '/create',
        component: ProductTypes.Create,
      },
      {
        path: '/:id/edit',
        component: ProductTypes.Edit,
      },
    ],
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    title: t('dashboard.title'),
  },
  {
    path: '/',
    component: Home,
    exact: true,
    title: t('dashboard.title'),
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
    title: t('settings.title'),
  },
];

const PrivateRoutes = () => (
  <Switch>
    {map(
      flatMap(routes, route => {
        if (route.routes) {
          return map(route.routes, subRoute => ({
            ...subRoute,
            path: route.path + subRoute.path,
            exact: subRoute.path === '/',
          }));
        }
        return route;
      }),
      route => (
        <Route
          {...route}
          component={e => (
            <PrivateLayout>
              <route.component {...e} />
            </PrivateLayout>
          )}
          key={route.path}
        />
      )
    )}
  </Switch>
);

PrivateRoutes.propTypes = {};

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
}))(PrivateRoutes);
