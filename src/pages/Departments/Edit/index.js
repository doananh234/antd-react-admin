import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const DepartmentsEdit = props => (
  <Edit {...props} resource="departments">
    <Form />
  </Edit>
);

DepartmentsEdit.propTypes = {};

export default DepartmentsEdit;
