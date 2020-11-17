import React from 'react';
import PropTypes from 'prop-types';
import PageTitleWrapper from './styles';

const PageTitle = ({ children, extraAction, className }) => (
  <PageTitleWrapper className={className}>
    <h1>{children}</h1>
    <div className="extraAction">{extraAction}</div>
  </PageTitleWrapper>
);

PageTitle.propTypes = {
  children: PropTypes.any,
  extraAction: PropTypes.any,
  className: PropTypes.string,
};

export default PageTitle;
