import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const DepartmentsForm = props => (
  <div {...props}>
    <RestInputItem source="name" header="departments.name" />
    <RestInputItem source="description" header="departments.description" />
  </div>
);

DepartmentsForm.propTypes = {};

export default DepartmentsForm;
