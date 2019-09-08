import React from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

const StatusLabel = ({ record }) =>
  record ? <Tag color={record.color}>{record.name}</Tag> : <Tag />;
StatusLabel.propTypes = {
  record: PropTypes.object,
};

export default StatusLabel;
