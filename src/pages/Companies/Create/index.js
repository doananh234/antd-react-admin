import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const CompaniesCreate = props => (
  <Create {...props} resource="companies">
    <Form />
  </Create>
);

CompaniesCreate.propTypes = {};

export default CompaniesCreate;
