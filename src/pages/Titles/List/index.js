import React from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const TitlesList = props => (
  <List {...props} resource="titles">
    <RestFieldItem source="name" header="titles.name" />
    <RestFieldItem source="description" header="titles.description" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

TitlesList.propTypes = {};

export default TitlesList;
