import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="avatar" placeholder="clients.avatar" />
    <RestInputItem source="fullName" placeholder="clients.fullName" />
    <RestInputItem source="firstName" placeholder="clients.firstName" />
    <RestInputItem source="lastName" placeholder="clients.lastName" />
    <RestInputItem source="email" placeholder="clients.email" />
    <RestInputItem source="gender" placeholder="clients.gender" />
    <RestInputItem source="phoneNumber" placeholder="clients.phoneNumber" />
    <RestInputItem source="address" placeholder="clients.address" />
    <RestInputItem source="companyId" placeholder="clients.company" />
    <RestInputItem source="isActive" placeholder="clients.isActive" />
  </div>
);

Filter.propTypes = {};

export default Filter;
