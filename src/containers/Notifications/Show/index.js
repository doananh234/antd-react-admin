import React from 'react';
import RestFieldItem from 'components/RestField/RestFieldItem';
import RestShow from '../../rest/Show';

const NotificationsShow = (props) => (
  <RestShow {...props} hasEdit resource="notifications">
    <RestFieldItem source="message" header="notifications.message" />
    <RestFieldItem source="createdAt" header="notifications.createdAt" />
  </RestShow>
);

export default NotificationsShow;
