import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const ProjectsEdit = props => (
  <Edit {...props} resource="projects">
    <Form />
  </Edit>
);

ProjectsEdit.propTypes = {};

export default ProjectsEdit;
