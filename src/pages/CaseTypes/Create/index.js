import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const CaseTypesCreate = props => (
  <Create {...props} resource="caseTypes">
    <Form />
  </Create>
);
CaseTypesCreate.propTypes = {};

export default CaseTypesCreate;
