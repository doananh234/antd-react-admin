import React from 'react';
import { Badge } from 'antd';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';

const BadgeStatus = (props) => (
  <Badge
    status={getRecordData(props.record, props.source) ? 'success' : 'error'}
  />
);

BadgeStatus.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
};

export default BadgeStatus;
