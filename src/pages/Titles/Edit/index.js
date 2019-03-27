import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const TitlesEdit = props => (
  <Edit {...props} resource="titles">
    <Form />
  </Edit>
);

TitlesEdit.propTypes = {};

export default TitlesEdit;
