import React from 'react';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const UsersList = props => (
  <List {...props} resource="users">
    <RestFieldItem source="fullName" header="fullName" />
    <RestFieldItem source="email" header="email" />
    <RestFieldItem source="roleId" header="roleId" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

UsersList.propTypes = {};

export default UsersList;
