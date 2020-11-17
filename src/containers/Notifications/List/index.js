import React from 'react';
import { formatDate } from 'utils/textUtils';
import RestFieldItem from 'components/RestField/RestFieldItem';
import ActionGroup from 'components/RestActions/ActionGroup';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';
import NotificationList from '../components/NotificationList';
import List from '../../rest/List';

const NotificationsList = (props) => (
  <List
    {...props}
    customLayout={<NotificationList {...props} />}
    noCardWrapper
    getFromUrl={false}
    isUpdateRoute={false}
    resource="notifications"
    initialFilter={{ orderBy: '-createdAt' }}
  >
    <RestFieldItem source="message" header="notifications.message" />
    <RestFieldItem
      source="createdAt"
      header="notifications.createdAt"
      format={(data) => formatDate(data)}
    />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

NotificationsList.propTypes = {};

export default NotificationsList;
