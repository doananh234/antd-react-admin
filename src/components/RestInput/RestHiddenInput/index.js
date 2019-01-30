import React from 'react';
import PropTypes from 'prop-types';
import FormItem from '../../form/FormItem';
import { getRecordData } from '../../../utils/tools';
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
          <input />
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
