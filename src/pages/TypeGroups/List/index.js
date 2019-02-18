import React from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const TypeGroupsList = props => (
  <List {...props} resource="typeGroups">
    <RestFieldItem source="displayName.vi" title="displayName.vi" />
    <RestFieldItem source="slug" title="slug" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

TypeGroupsList.propTypes = {};

export default TypeGroupsList;
