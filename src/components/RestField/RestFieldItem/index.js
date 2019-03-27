import React from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from '../../../utils/tools';

const RestFieldItem = ({
  record,
  source,
  format,
  formatSubmitData,
  valueProp,
  component,
  onChangeRecord,
}) => {
  const element = React.cloneElement(component, {
    [valueProp]: format(getRecordData(record, source)),
    onChange: value => {
      onChangeRecord(formatSubmitData(value));
    },
  });
  // element.setAttributeNode('update', e => {
  //   console.log('e', e);
  // });
  return element;
};
RestFieldItem.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
  format: PropTypes.func,
  formatSubmitData: PropTypes.func,
  onChangeRecord: PropTypes.func,
};

RestFieldItem.defaultProps = {
  format: data => data,
  formatSubmitData: data => data,
  onChangeRecord: () => {},
  component: <span />,
  valueProp: 'children',
};

export default RestFieldItem;
