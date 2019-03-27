import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="fullName" placeholder="fullName" />
    <RestInputItem source="email" placeholder="email" />
    <RestInputItem source="roleId" placeholder="roleId" />
  </div>
);

Filter.propTypes = {};

export default Filter;
