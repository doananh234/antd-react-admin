import React from 'react';
import PropTypes from 'prop-types';
import BoxTitleWrapper from '../BoxTitle';
import { BoxWrapper } from './styles';

const Box = ({ header, subtitle, children, icon, className }) => (
  <BoxWrapper className={`isoBoxWrapper ${className}`}>
    {header && (
      <BoxTitleWrapper header={header} subheader={subtitle} icon={icon} />
    )}
    {children}
  </BoxWrapper>
);
Box.propTypes = {
  header: PropTypes.any,
  subtitle: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default Box;
