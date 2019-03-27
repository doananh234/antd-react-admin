import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const ProjectsForm = props => (
  <div {...props}>
    <RestInputItem source="name" header="name" />
    <RestInputItem source="description" header="description" />
    <RestInputItem source="displayImage" header="displayImage" />
    <RestInputItem source="startDate" header="startDate" />
    <RestInputItem source="endDate" header="endDate" />
  </div>
);

ProjectsForm.propTypes = {};

export default ProjectsForm;
