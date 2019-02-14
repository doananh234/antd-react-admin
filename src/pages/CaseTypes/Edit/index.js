import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const CaseTypesEdit = props => (
  <Edit {...props} resource="caseTypes">
    <Form />
  </Edit>
);
CaseTypesEdit.propTypes = {};

export default CaseTypesEdit;
