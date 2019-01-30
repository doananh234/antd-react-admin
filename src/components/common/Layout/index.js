import React from 'react';
import PropTypes from 'prop-types';
import { LayoutContentWrapper } from './style';

const LayountContent = props => (
  <LayoutContentWrapper {...props}>{props.children}</LayoutContentWrapper>
);

LayountContent.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};

export default LayountContent;
