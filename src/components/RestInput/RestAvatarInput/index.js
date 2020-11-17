import React from 'react';
import PropTypes from 'prop-types';
import { getRecordData } from 'utils/tools';
import FormUploadAvatar from '../../form/FormUploadAvatar';
import { RestInputContext } from '../RestInputContext';

const RestAvatarInput = (props) => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <FormUploadAvatar
        record={record}
        form={form}
        defaultValue={getRecordData(record, props.source)}
        {...props}
      />
    )}
  </RestInputContext.Consumer>
);

RestAvatarInput.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};

export default RestAvatarInput;
