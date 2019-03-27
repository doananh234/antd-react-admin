import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const ActivityTypesCreate = props => (
  <Create {...props} resource="activityTypes">
    <Form />
  </Create>
);

ActivityTypesCreate.propTypes = {};

export default ActivityTypesCreate;
