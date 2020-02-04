import React from 'react';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const UserTypesList = props => (
  <List {...props} resource="userTypes">
    <RestFieldItem source="id" header="userTypes.id" />
    <RestFieldItem source="name" header="userTypes.name" />
    <RestFieldItem source="description" header="userTypes.description" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

UserTypesList.propTypes = {};

export default UserTypesList;
