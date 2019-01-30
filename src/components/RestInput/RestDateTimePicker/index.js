import React from 'react';
import PropTypes from 'prop-types';
import FormDateTimePicker from '../../form/FormDateTimePicker';
import { getRecordData } from '../../../utils/tools';
import { RestInputContext } from '../RestInputContext';

const RestFormDateTimePicker = props => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <FormDateTimePicker
        {...props}
        form={form}
        defaultValue={getRecordData(record, props.source)}
      />
    )}
  </RestInputContext.Consumer>
);

RestFormDateTimePicker.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestFormDateTimePicker;
