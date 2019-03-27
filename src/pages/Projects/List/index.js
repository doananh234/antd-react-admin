import React from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const ProjectsList = props => (
  <List {...props} resource="projects">
    <RestFieldItem source="name" header="name" />
    <RestFieldItem source="description" header="description" />
    <RestFieldItem source="displayImage" header="displayImage" />
    <RestFieldItem source="startDate" header="startDate" />
    <RestFieldItem source="endDate" header="endDate" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

ProjectsList.propTypes = {};

export default ProjectsList;
