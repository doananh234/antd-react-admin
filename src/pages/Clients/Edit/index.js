import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const ClientsEdit = props => (
  <Edit {...props} resource="clients">
    <Form />
  </Edit>
);

ClientsEdit.propTypes = {};

export default ClientsEdit;
