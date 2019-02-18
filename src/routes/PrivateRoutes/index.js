import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { t } from 'i18next';
import { flatMap, map } from 'lodash';
import PrivateLayout from '../../layout/PrivateLayout';
import NotFoundPage from '../../containers/404Page';
import TypeGroups from '../../pages/TypeGroups';
import Home from '../../pages/Dashboard';
import CaseTypes from '../../pages/CaseTypes';
import ModalRoute from '../ModalRoute';

const routes = [

  {
    path: '/typeGroups',
    routes: [
      {
        path: '/',
        component: TypeGroups.List,
      },
      {
        path: '/create',
        component: TypeGroups.Create,
      },
      {
        path: '/:id/edit',
        component: TypeGroups.Edit,
      },
    ],
  },
  {
    path: '/',
    component: Home,
    exact: true,
    title: t('dashboard.title'),
  },
  {
    path: '/caseTypes',
    routes: [
      {
        path: '/',
        component: CaseTypes.List,
      },
      {
        path: '/create',
        component: CaseTypes.Create,
      },
      {
        path: '/:id/edit',
        component: CaseTypes.Edit,
      },
    ],
  },
];

const PrivateRoutes = props => (
  <PrivateLayout>
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
          <Route {...route} key={route.path} />
        )
      )}
      <Route component={NotFoundPage} />
    </Switch>
    <ModalRoute {...props} />
  </PrivateLayout>
);

PrivateRoutes.propTypes = {};

export default PrivateRoutes;
