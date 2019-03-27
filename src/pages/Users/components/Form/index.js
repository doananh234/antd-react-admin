import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const UsersForm = props => (
  <div {...props}>
    <RestInputItem source="fullName" header="fullName" />
    <RestInputItem source="email" header="email" />
    <RestInputItem source="roleId" header="roleId" />
  </div>
);

UsersForm.propTypes = {};

export default UsersForm;
