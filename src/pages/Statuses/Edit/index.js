import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const StatusesEdit = props => (
  <Edit {...props} resource="statuses">
    <Form />
  </Edit>
);

StatusesEdit.propTypes = {};

export default StatusesEdit;
