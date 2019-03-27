import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const ClientsCreate = props => (
  <Create {...props} resource="clients">
    <Form />
  </Create>
);

ClientsCreate.propTypes = {};

export default ClientsCreate;
