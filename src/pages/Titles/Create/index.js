import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const TitlesCreate = props => (
  <Create {...props} resource="titles">
    <Form />
  </Create>
);

TitlesCreate.propTypes = {};

export default TitlesCreate;
