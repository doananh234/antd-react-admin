import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper } from './styles';

const Title = props => (
  <TitleWrapper className={`txtTitle ${props.className}`} style={props.style}>
    {props.children}
  </TitleWrapper>
);

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.any,
};
export default Title;
