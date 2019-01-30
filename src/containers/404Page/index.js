import React from 'react';
import NotFoundPageWrapper from './styles';
import NotFoundIcon from '../../assets/icons/404-error.svg';

function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <div className="main">
        <img src={NotFoundIcon} alt="Not Found" />
        <div className="text-div">
          <div>404</div>
          <div>Page not found</div>
        </div>
      </div>
    </NotFoundPageWrapper>
  );
}

export default NotFoundPage;
