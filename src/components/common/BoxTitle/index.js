import React from 'react';
import PropTypes from 'prop-types';
// import Icon from '@ant-design/icons';
import I18n from 'i18next';
import { BoxTitle, BoxSubTitle } from './styles';

const BoxTitleUI = (props) => (
  <div style={{ marginBottom: 20 }}>
    {props.header ? (
      <BoxTitle className="isoBoxTitle">
        {/* {props.icon && <Icon type={props.icon} />} */}
        {I18n.t(props.header)}
      </BoxTitle>
    ) : (
      ''
    )}
    {props.subtitle ? (
      <BoxSubTitle className="isoBoxSubTitle">{props.subtitle}</BoxSubTitle>
    ) : (
      ''
    )}
  </div>
);
BoxTitleUI.propTypes = {
  header: PropTypes.any,
  subtitle: PropTypes.string,
};

export default BoxTitleUI;
