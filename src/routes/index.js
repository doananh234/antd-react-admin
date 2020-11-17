import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
// import { AnimatedSwitch } from 'react-router-transition';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/actions';
import { getConfig } from 'redux/config/actions';
import privateRoutes from './PrivateRoutes';
import publicRoutes from './PublicRoutes';
import RoutesWrapper from './styles';
import ModalRoute from './ModalRoute';
import NotFoundPage from '../containers/404Page';

const Routes = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      setTimeout(() => {
        // fade out
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = '';
      }, 1500);
    }
    dispatch(getConfig());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    isAuthenticated && dispatch(getCurrentUser());
    // eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <RoutesWrapper>
      <Router>
        <Switch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          {publicRoutes()}
          <Route exact path="/404" component={() => <NotFoundPage />} />
          {privateRoutes()}
          <Redirect
            to={{
              pathname: '/404',
            }}
          />
        </Switch>
        <ModalRoute />
      </Router>
    </RoutesWrapper>
  );
};

export default Routes;
