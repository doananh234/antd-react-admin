import React from 'react';
import PropTypes from 'prop-types';
import EmptyDataWrapper from './styles';
import Text from '../Text';

const EmptyData = props => (
  <EmptyDataWrapper>
    <div className="content">
      <div className="icon">
        <i className={props.icon || 'anticon-ic-face-smile'} />
      </div>
      <div className="text">
        <Text type="bodyGray">
          {props.text || 'Chưa có thông tin để hiển thị'}
        </Text>
      </div>
    </div>
  </EmptyDataWrapper>
);

EmptyData.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
export default EmptyData;
