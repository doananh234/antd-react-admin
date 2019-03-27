import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const UsersEdit = props => (
  <Edit {...props} resource="users">
    <Form />
  </Edit>
);

UsersEdit.propTypes = {};

export default UsersEdit;
