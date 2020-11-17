import React from 'react';
import Create from '../../rest/Create';
import Form from '../components/Form';

const NotificationsCreate = props => (
  <Create {...props} resource="notifications">
    <Form />
  </Create>
);

NotificationsCreate.propTypes = {};

export default NotificationsCreate;
