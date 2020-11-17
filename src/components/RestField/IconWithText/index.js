import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { getRecordData } from 'utils/tools';

const IconWithText = (props) => (
  <div>
    <Avatar
      icon={
        props.antIcon ? (
          <i
            className={`anticon-${getRecordData(props.record, props.antIcon)}`}
          />
        ) : (
          getRecordData(props.record, props.icon)
        )
      }
      style={{
        backgroundColor: getRecordData(props.record, props.backgroundColor),
      }}
    />
    <span> 
      {' '}
      {getRecordData(props.record, props.text)}
    </span>
  </div>
);

IconWithText.propTypes = {
  record: PropTypes.object,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  antIcon: PropTypes.string,
  text: PropTypes.string,
};
export default IconWithText;
