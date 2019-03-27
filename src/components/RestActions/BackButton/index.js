import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

const BackButton = props => (
  <Tooltip header={I18n.t('tooltip.goBack')}>
    <ButtonWrapper icon="rollback" onClick={() => props.onBack(props.source)}>
      {/* <IntlMessages id="button.back" /> */}
    </ButtonWrapper>
  </Tooltip>
);

BackButton.propTypes = {
  onBack: PropTypes.func,
  source: PropTypes.string,
};

BackButton.defaultProps = {
  source: 'back',
};

export default BackButton;
