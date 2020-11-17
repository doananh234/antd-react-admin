import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import I18n from 'i18next';
import { EyeOutlined } from '@ant-design/icons';
import { ButtonWrapper } from './styles';

const ShowButton = (props) => (
  <Tooltip header={I18n.t('tooltip.viewDetail')}>
    <ButtonWrapper
      type="primary"
      icon={<EyeOutlined />}
      onClick={() => props.gotoShowPage(props.record.id, props.source)}
    >
      {/* <IntlMessages id="button.show" /> */}
    </ButtonWrapper>
  </Tooltip>
);

ShowButton.propTypes = {
  gotoShowPage: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
};

ShowButton.defaultProps = {
  source: 'show',
};

export default ShowButton;
