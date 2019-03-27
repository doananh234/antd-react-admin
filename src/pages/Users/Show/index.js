import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const UsersShow = props => (
  <RestShow {...props} hasEdit resource="users">
    <RestFieldItem source="fullName" header="fullName" />
    <RestFieldItem source="email" header="email" />
    <RestFieldItem source="roleId" header="roleId" />
  </RestShow>
);

export default UsersShow;
