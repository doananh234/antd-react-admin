import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styles';

const Button = props => <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
