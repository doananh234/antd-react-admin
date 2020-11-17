import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { getRecordData } from 'utils/tools';

const EnumField = ({ format, resourceData, titleProp, source, valueProp, record }) => {
  const sourceValue = getRecordData(record, source);
  const data = resourceData.find(e => e[valueProp] === sourceValue);
  return <span>{data && format(i18next.t(data[titleProp]), record)}</span>;
};

EnumField.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
  resourceData: PropTypes.array,
  titleProp: PropTypes.string,
  valueProp: PropTypes.string,
  format: PropTypes.func,
};

EnumField.defaultProps = {
  valueProp: 'value',
  titleProp: 'text',
  resourceData: [],
  format: e => e,
};

export default EnumField;
