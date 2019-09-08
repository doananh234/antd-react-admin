import React from 'react';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const UsersEdit = props => (
  <Edit {...props} formatOnSubmit={({ fullName }) => ({ fullName })} resource="users">
    <Form />
  </Edit>
);

UsersEdit.propTypes = {};

export default UsersEdit;
