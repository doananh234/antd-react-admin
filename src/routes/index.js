import React, { Component } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import RoutesWrapper from './styles';

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
        <PublicRoutes />
        <PrivateRoutes />
      </RoutesWrapper>
    );
  }
}

export default Routes;
