import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const StatusesCreate = props => (
  <Create {...props} resource="statuses">
    <Form />
  </Create>
  );

StatusesCreate.propTypes = {};

export default StatusesCreate;
