import React from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from '../../../utils/tools';
import FormAutoComplete from '../../form/FormAutoComplete';
import { RestInputContext } from '../RestInputContext';

const RestAutoComplete = props => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <FormAutoComplete
        {...props}
        form={form}
        defaultValue={props.defaultValue || getRecordData(record, props.source)}
      />
    )}
  </RestInputContext.Consumer>
);

RestAutoComplete.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default RestAutoComplete;
