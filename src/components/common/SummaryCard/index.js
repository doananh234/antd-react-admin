import React from 'react';
import { Icon } from 'antd';
import I18n from 'i18next';
import PropTypes from 'prop-types';
import Text from '../Text';
import { SummaryCardWrapper } from './styles';

const SummaryCard = ({ color, value, header, icon }) => (
  <SummaryCardWrapper style={{ background: color }}>
    <div className="vInfo">
      <div className="row">
        <Text type="h1SemiBold" className="value">
          {value}
        </Text>
        <div>
          <Icon type={icon} theme="outlined" className="icon" />
        </div>
      </div>
      <Text type="h5" className="title">
        {I18n.t(header)}
      </Text>
    </div>
  </SummaryCardWrapper>
);
SummaryCard.propTypes = {
  color: PropTypes.string,
  value: PropTypes.any,
  header: PropTypes.any,
  icon: PropTypes.string,
};

export default SummaryCard;
