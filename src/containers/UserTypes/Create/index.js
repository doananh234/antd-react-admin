import React from 'react';
import Create from '../../rest/Create';
import Form from '../components/Form';

const UserTypesCreate = props => (
  <Create {...props} resource="userTypes">
    <Form />
  </Create>
);

UserTypesCreate.propTypes = {};

export default UserTypesCreate;
