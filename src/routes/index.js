import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import RoutesWrapper from './styles';
import ModalRoute from './ModalRoute';
import NotFoundPage from '../containers/404Page';

class Routes extends Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <RoutesWrapper>
        {/* <Switch> */}
        <PublicRoutes />
        <PrivateRoutes />
        <ModalRoute />
        <Route component={NotFoundPage} />
        {/* </Switch> */}
      </RoutesWrapper>
    );
  }
}

export default Routes;
