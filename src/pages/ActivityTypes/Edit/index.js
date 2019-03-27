import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const ActivityTypesEdit = props => (
  <Edit {...props} resource="activityTypes">
    <Form />
  </Edit>
);

ActivityTypesEdit.propTypes = {};

export default ActivityTypesEdit;
