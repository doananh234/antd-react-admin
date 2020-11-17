import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import moment from 'moment';
import I18n from 'i18next';
import { DatePicker, Button, Form } from 'antd';
import { getRecordData } from 'utils/tools';
import FormDateTimePicker from '../../form/FormDateTimePicker';
import { RestInputContext } from '../RestInputContext';

const { RangePicker } = DatePicker;

const RestFormDateTimePicker = (props) => (
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

export const RestFormDateRagePicker = (props) => {
  const { record, form } = useContext(RestInputContext);

  useEffect(() => {
    get(record, props.source) &&
      form.setFieldsValue({
        [props.source]: props.formatDefault(get(record, props.source)),
      });
    // eslint-disable-next-line
  }, [record]);
  return (
    <Form.Item name={props.source} label="Deadline" rules={[{ type: 'array' }]}>
      <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
  );
};

RestFormDateRagePicker.propTypes = {
  source: PropTypes.string,
  formatDefault: PropTypes.func,
};

RestFormDateRagePicker.defaultProps = {
  formatDefault: (value) => value,
};
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

const FilterUI = ({
  source,
  resourceFilter,
  handleReset,
  setSelectedKeys,
  confirm,
}) => {
  const defaultValue = get(resourceFilter.filter, `${source}`);
  const [value, setValue] = useState(
    defaultValue && [moment(defaultValue.$gte), moment(defaultValue.$lte)],
  );
  return (
    <div style={{ padding: 8 }}>
      <RangePicker
        value={value}
        onChange={(e) => {
          setValue(e[0] && [e[0].startOf('day'), e[1] && e[1].endOf('day')]);
          setSelectedKeys([
            {
              $gte: e[0] && e[0].startOf('day').toISOString(),
              $lte: e[1] && e[1].endOf('day').toISOString(),
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
