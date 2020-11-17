import React from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';
import FormAutoComplete from '../../form/FormAutoComplete';
import { RestInputContext } from '../RestInputContext';
import RestInputItem from '../RestInputItem';

const RestAutoComplete = (props) => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <div>
        <RestInputItem
          {...props}
          style={{ display: 'none' }}
          defaultValue={
            props.defaultValue || getRecordData(record, props.source)
          }
          name={props.source}
        />
        <FormAutoComplete
          {...props}
          form={form}
          defaultValue={
            props.defaultValue || getRecordData(record, props.source)
          }
        />
      </div>
    )}
  </RestInputContext.Consumer>
);

RestAutoComplete.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default RestAutoComplete;
