import React from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';
import FormSelect from '../../form/FormSelect';
import { RestInputContext } from '../RestInputContext';

const RestSelect = props => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <FormSelect
        {...props}
        form={form}
        defaultValue={getRecordData(record, props.source) || props.defaultValue}
      />
    )}
  </RestInputContext.Consumer>
);

RestSelect.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
};

export default RestSelect;
