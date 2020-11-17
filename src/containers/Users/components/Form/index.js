import React from 'react';
import RestInputItem from 'components/RestInput/RestInputItem';
import { Input } from 'antd';

const UsersForm = () => (
  <div>
    <RestInputItem source="name" header="users.name" />
    <RestInputItem source="email" header="users.email" />
    <RestInputItem source="phoneNumber" header="users.phoneNumber" />
    <RestInputItem source="role" header="users.role" />
    <RestInputItem
      ContentComponent={Input.Password}
      source="password"
      header="users.password"
    />
  </div>
);

UsersForm.propTypes = {};

export default UsersForm;
