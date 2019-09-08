import React from 'react';
import PropTypes from 'prop-types';
import FormMultiUpload from '../../form/FormMultiUpload';
import { getRecordData } from '../../../utils/tools';
import { RestInputContext } from '../RestInputContext/index';

const RestMultiPhotos = props => (
  <RestInputContext.Consumer>
    {({ record, form, handleSubmit }) => (
      <FormMultiUpload handleSubmit={handleSubmit} record={record} form={form} {...props} defaultValue={getRecordData(record, props.source)} />
    )}
  </RestInputContext.Consumer>
);

RestMultiPhotos.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestMultiPhotos;
