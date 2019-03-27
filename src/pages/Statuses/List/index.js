import React from 'react';
import { Switch } from 'antd';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const StatusesList = props => (
  <List {...props} resource="statuses">
    <RestFieldItem source="name" header="statuses.name" />
    <RestFieldItem source="color" header="statuses.color" />
    <RestFieldItem
      valueProp="checked"
      component={<Switch />}
      source="isActive"
      header="statuses.isActive"
    />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

StatusesList.propTypes = {};

export default StatusesList;
