import React from 'react';
import { Switch } from 'antd';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const ActivityTypesList = props => (
  <List {...props} resource="activityTypes">
    <RestFieldItem source="activityType" header="activityTypes.activityType" />
    <RestFieldItem source="note" header="activityTypes.note" />
    <RestFieldItem source="pushMessage" header="activityTypes.pushMessage" />
    <RestFieldItem
      source="isActive"
      valueProp="checked"
      component={<Switch />}
      header="activityTypes.isActive"
    />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

ActivityTypesList.propTypes = {};

export default ActivityTypesList;
