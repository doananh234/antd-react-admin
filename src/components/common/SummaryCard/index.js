import React from 'react';
import { Icon } from 'antd';
import I18n from 'i18next';
import PropTypes from 'prop-types';
import Text from '../Text';
import { SummaryCardWrapper } from './styles';

const SummaryCard = ({ color, value, title, icon }) => (
  <SummaryCardWrapper style={{ background: color }}>
    <div>
      <Icon type={icon} theme="outlined" className="icon" />
    </div>
    <div className="vInfo">
      <Text type="h1SemiBold" className="value">
        {value}
      </Text>
      <Text type="h5" className="title">
        {I18n.t(title)}
      </Text>
    </div>
  </SummaryCardWrapper>
);
SummaryCard.propTypes = {
  color: PropTypes.string,
  value: PropTypes.any,
  title: PropTypes.any,
  icon: PropTypes.string,
};

export default SummaryCard;
