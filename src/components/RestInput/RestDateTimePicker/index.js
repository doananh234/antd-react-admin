import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import moment from 'moment';
import I18n from 'i18next';
import { DatePicker, Button } from 'antd';
import FormDateTimePicker from '../../form/FormDateTimePicker';
import { getRecordData } from '../../../utils/tools';
import { RestInputContext } from '../RestInputContext';

const { RangePicker } = DatePicker;

const RestFormDateTimePicker = props => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <FormDateTimePicker
        {...props}
        form={form}
        defaultValue={
          getRecordData(record, props.source) === null
            ? undefined
            : getRecordData(record, props.source)
        }
      />
    )}
  </RestInputContext.Consumer>
);
/* eslint-disable */
export const dateFilterDropdown = (source, resourceFilter, handleReset) => ({
  setSelectedKeys,
  confirm,
}) => {
  const defaultValue = get(resourceFilter.filter, `${source}`);
  return (
    <FilterUI
      setSelectedKeys={setSelectedKeys}
      confirm={confirm}
      source={source}
      resourceFilter={resourceFilter}
      handleReset={handleReset}
    />
  );
};

const FilterUI = ({ source, resourceFilter, handleReset, setSelectedKeys, confirm }) => {
  const defaultValue = get(resourceFilter.filter, `${source}`);
  const [value, setValue] = useState(
    defaultValue && [moment(defaultValue.$gte), moment(defaultValue.$lte)]
  );
  return (
    <div style={{ padding: 8 }}>
      <RangePicker
        value={value}
        onChange={e => {
          setValue(e);
          setSelectedKeys([
            {
              $gte: e[0] && e[0].toISOString(),
              $lte: e[1] && e[1].toISOString(),
            },
          ]);
        }}
      />
      <div style={{ marginTop: 8, textAlign: 'right' }}>
        <Button
          type="primary"
          onClick={() => confirm()}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          {I18n.t('button.search')}
        </Button>
        <Button
          onClick={() => {
            setValue(undefined);
            handleReset(source);
          }}
          size="small"
          style={{ width: 90 }}
        >
          {I18n.t('button.reset')}
        </Button>
      </div>
    </div>
  );
};

dateFilterDropdown.propTypes = {
  setSelectedKeys: PropTypes.func,
  confirm: PropTypes.func,
  resourceFilter: PropTypes.object,
  source: PropTypes.string,
};

RestFormDateTimePicker.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestFormDateTimePicker;
