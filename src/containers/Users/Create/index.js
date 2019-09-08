import React from 'react';
import Create from '../../rest/Create';
import Form from '../components/Form';

const UsersCreate = props => (
  <Create {...props} resource="users">
    <Form />
  </Create>
);

UsersCreate.propTypes = {};

export default UsersCreate;
