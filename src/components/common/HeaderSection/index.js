import React from 'react';
import PropTypes from 'prop-types';
// import Icon from '@ant-design/icons';
import i18next from 'i18next';
import { HeaderSectionWrapper } from './styles';

const HeaderSection = ({ title }) => (
  <HeaderSectionWrapper>
    {/* {icon && <Icon type={icon} />} */}
    {i18next.t(title)}
  </HeaderSectionWrapper>
);
HeaderSection.propTypes = {
  title: PropTypes.string,
};

export default HeaderSection;
