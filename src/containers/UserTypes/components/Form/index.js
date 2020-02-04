import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const UserTypesForm = props => (
  <div {...props}>
    <RestInputItem source="id" header="userTypes.id" />
    <RestInputItem source="name" header="userTypes.name" />
    <RestInputItem source="description" header="userTypes.description" />
  </div>
);

UserTypesForm.propTypes = {};

export default UserTypesForm;
