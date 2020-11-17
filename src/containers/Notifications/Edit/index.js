import React from 'react';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const NotificationsEdit = props => (
  <Edit {...props} resource="notifications">
    <Form />
  </Edit>
);

NotificationsEdit.propTypes = {};

export default NotificationsEdit;
