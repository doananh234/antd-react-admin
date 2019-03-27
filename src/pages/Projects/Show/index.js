import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const ProjectsShow = props => (
  <RestShow {...props} hasEdit resource="projects">
    <RestFieldItem source="name" header="name" />
    <RestFieldItem source="description" header="description" />
    <RestFieldItem source="displayImage" header="displayImage" />
    <RestFieldItem source="startDate" header="startDate" />
    <RestFieldItem source="endDate" header="endDate" />
  </RestShow>
);

export default ProjectsShow;
