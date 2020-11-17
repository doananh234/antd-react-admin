import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';
import FormItem from '../../form/FormItem';
import { RestInputContext } from '../RestInputContext';

const RestHiddenInput = props => (
  <div style={{ display: 'none' }}>
    <RestInputContext.Consumer>
      {({ record, form }) => (
        <FormItem
          {...props}
          form={form}
          defaultValue={props.defaultValue || getRecordData(record, props.source)}
        >
          <Input />
        </FormItem>
      )}
    </RestInputContext.Consumer>
  </div>
);

RestHiddenInput.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default RestHiddenInput;
