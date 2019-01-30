import React from 'react';
import PropTypes from 'prop-types';
import BoxTitleWrapper from '../BoxTitle';
import { BoxWrapper } from './style';

const Box = ({ title, subtitle, children, icon, className }) => (
  <BoxWrapper className={`isoBoxWrapper ${className}`}>
    {title && <BoxTitleWrapper title={title} subtitle={subtitle} icon={icon} />}
    {children}
  </BoxWrapper>
);
Box.propTypes = {
  title: PropTypes.any,
  subtitle: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default Box;
