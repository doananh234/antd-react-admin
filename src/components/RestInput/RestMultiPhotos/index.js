import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';
import FormMultiUpload from '../../form/FormMultiUpload';
import { RestInputContext } from '../RestInputContext/index';

const RestMultiPhotos = (props) => {
  const { record, form, handleSubmit } = useContext(RestInputContext);
  return (
    <FormMultiUpload
      handleSubmit={handleSubmit}
      record={record}
      form={form}
      {...props}
      defaultValue={getRecordData(record, props.source)}
    />
  );
};

RestMultiPhotos.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestMultiPhotos;
