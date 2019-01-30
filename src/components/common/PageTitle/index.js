import React from 'react';
import PropTypes from 'prop-types';
import PageTitleWrapper from './styles';

const PageTitle = ({ children }) => <PageTitleWrapper>{children}</PageTitleWrapper>;

PageTitle.propTypes = {
  children: PropTypes.any,
};

export default PageTitle;
