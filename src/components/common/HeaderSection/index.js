import React from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";
import i18next from "i18next";
import { HeaderSectionWrapper } from "./styles";

const HeaderSection = ({ icon, title }) => (
  <HeaderSectionWrapper>
    <Icon type={icon} /> 
    {' '}
    {i18next.t(title)}
  </HeaderSectionWrapper>
  );
HeaderSection.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default HeaderSection;
