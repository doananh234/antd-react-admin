import React from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from '../../../utils/tools';

const RestFieldItem = ({ record, source, format, valueProp, component }) =>
  React.cloneElement(component, {
    [valueProp]: format(getRecordData(record, source)),
    record,
  });

RestFieldItem.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
  format: PropTypes.func,
};

RestFieldItem.defaultProps = {
  format: data => data,
  component: <span />,
  valueProp: 'children',
};

export default RestFieldItem;
