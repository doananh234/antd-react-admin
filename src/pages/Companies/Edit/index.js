import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const CompaniesEdit = props => (
  <Edit {...props} resource="companies">
    <Form />
  </Edit>
);

CompaniesEdit.propTypes = {};

export default CompaniesEdit;
