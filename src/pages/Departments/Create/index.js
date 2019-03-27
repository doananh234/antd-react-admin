import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const DepartmentsCreate = props => (
  <Create {...props} resource="departments">
    <Form />
  </Create>
);

DepartmentsCreate.propTypes = {};

export default DepartmentsCreate;
