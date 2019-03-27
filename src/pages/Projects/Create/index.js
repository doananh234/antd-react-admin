import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const ProjectsCreate = props => (
  <Create {...props} resource="projects">
    <Form />
  </Create>
);

ProjectsCreate.propTypes = {};

export default ProjectsCreate;
