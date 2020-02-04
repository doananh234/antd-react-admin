import React from 'react';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const UserTypesEdit = props => (
  <Edit {...props} resource="userTypes">
    <Form />
  </Edit>
);

UserTypesEdit.propTypes = {};

export default UserTypesEdit;
