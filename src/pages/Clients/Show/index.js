import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const ClientsShow = props => (
  <RestShow {...props} hasEdit resource="clients">
    <RestFieldItem source="avatar" header="avatar" />
    <RestFieldItem source="fullName" header="fullName" />
    <RestFieldItem source="firstName" header="firstName" />
    <RestFieldItem source="lastName" header="lastName" />
    <RestFieldItem source="email" header="email" />
    <RestFieldItem source="gender" header="gender" />
    <RestFieldItem source="phoneNumber" header="phoneNumber" />
    <RestFieldItem source="address" header="address" />
    <RestFieldItem source="companyId" header="companyId" />
    <RestFieldItem source="isActive" header="isActive" />
  </RestShow>
);

export default ClientsShow;
