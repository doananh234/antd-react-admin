import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import I18n from 'i18next';
import { BoxTitle, BoxSubTitle } from './style';

const BoxTitleUI = props => (
  <div style={{ marginBottom: 20 }}>
    {props.header ? (
      <BoxTitle className="isoBoxTitle">
        {props.icon && <Icon type={props.icon} />} 
        {' '}
        {I18n.t(props.header)}
        {' '}
      </BoxTitle>
    ) : (
      ''
    )}
    {props.subtitle ? (
      <BoxSubTitle className="isoBoxSubTitle"> 
        {' '}
        {props.subtitle}
        {' '}
      </BoxSubTitle>
) : ''}
  </div>
);
BoxTitleUI.propTypes = {
  header: PropTypes.any,
  icon: PropTypes.string,
  subtitle: PropTypes.string,
};

export default BoxTitleUI;
