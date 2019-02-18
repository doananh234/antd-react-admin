import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const TypeGroupsEdit = props => (
  <Edit {...props} resource="typeGroups">
    <Form />
  </Edit>
);

TypeGroupsEdit.propTypes = {};

export default TypeGroupsEdit;
