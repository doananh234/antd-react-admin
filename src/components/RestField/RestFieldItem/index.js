import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { getRecordData } from 'utils/tools';
import { Tag } from 'antd';
import { STATUS } from 'configs/localData';

export const formatStatus = (data) => {
  return (
    <Tag color={STATUS.find((e) => `${e.value}` === `${data}`)?.color}>
      {STATUS.find((e) => `${e.value}` === `${data}`)?.text}
    </Tag>
  );
};

const RestFieldItem = ({
  record,
  source,
  format,
  formatSubmitData,
  valueProp,
  component,
  onChangeRecord,
  customOnChange,
}) => {
  const element = React.cloneElement(component, {
    record,
    [valueProp]:
      typeof format(getRecordData(record, source), record) === 'undefined'
        ? i18next.t('error.waitingUpdate')
        : format(getRecordData(record, source), record),
    onChange: (value) =>
      customOnChange
        ? customOnChange(formatSubmitData(value), record)
        : onChangeRecord(formatSubmitData(value)),
  });
  return element;
};
RestFieldItem.propTypes = {
  record: PropTypes.any,
  source: PropTypes.string,
  format: PropTypes.func,
  formatSubmitData: PropTypes.func,
  onChangeRecord: PropTypes.func,
  filterKey: PropTypes.string,
};

RestFieldItem.defaultProps = {
  format: (data) => data,
  formatSubmitData: (data) => data,
  onChangeRecord: () => {},
  component: <span />,
  valueProp: 'children',
  filterDropdown: undefined,
};

export default RestFieldItem;
