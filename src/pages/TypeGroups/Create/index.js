import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const TypeGroupsCreate = props => (
  <Create {...props} resource="typeGroups">
    <Form />
  </Create>
);

TypeGroupsCreate.propTypes = {};

export default TypeGroupsCreate;
