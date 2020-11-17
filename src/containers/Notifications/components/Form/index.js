import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem/index';

const NotificationsForm = props => (
  <div {...props}>
    <RestInputItem source="message" header="notifications.message" />
    <RestInputItem source="createdAt" header="notifications.createdAt" />
  </div>
);

NotificationsForm.propTypes = {};

export default NotificationsForm;
