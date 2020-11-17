import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Spin } from 'antd';
import { getRecordData } from 'utils/tools';
import { ImageWrapper } from './styles';

const RestImageField = (props) => {
  if (props.record) {
    return props.type === 'avatar' ? (
      <Avatar
        alt={getRecordData(props.record, props.source)}
        src={getRecordData(props.record, props.source)}
      />
    ) : (
      <ImageWrapper
        style={props.style}
        className={props.className}
        alt={getRecordData(props.record, props.source)}
        src={getRecordData(props.record, props.source)}
      />
    );
  }
  return <Spin />;
};

RestImageField.propTypes = {
  type: PropTypes.string,
  source: PropTypes.string,
  record: PropTypes.object,
  style: PropTypes.any,
  className: PropTypes.string,
};
export default RestImageField;
