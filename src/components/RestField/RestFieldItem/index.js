import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
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
    record,
    [valueProp]:
      typeof format(getRecordData(record, source), record) === 'undefined'
        ? i18next.t('error.waitingUpdate')
        : format(getRecordData(record, source), record),
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
  record: PropTypes.any,
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
