import React from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';
import { RestInputContext } from '../RestInputContext';
import RestColorPickerUI from '../../form/FormColorPicker';

const RestColorPicker = (props) => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <RestColorPickerUI
        {...props}
        defaultValue={props.defaultValue || getRecordData(record, props.source)}
        record={record}
        form={form}
      />
    )}
  </RestInputContext.Consumer>
);

RestColorPicker.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
};

RestColorPicker.defaultProps = {};

export default RestColorPicker;
