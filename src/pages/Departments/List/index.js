import React from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const DepartmentsList = props => (
  <List {...props} resource="departments">
    <RestFieldItem source="name" header="departments.name" />
    <RestFieldItem source="description" header="departments.description" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

DepartmentsList.propTypes = {};

export default DepartmentsList;
