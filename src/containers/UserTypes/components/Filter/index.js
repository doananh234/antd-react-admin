import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="id" placeholder="userTypes.id" />
    <RestInputItem source="name" placeholder="userTypes.name" />
    <RestInputItem source="description" placeholder="userTypes.description" />
  </div>
);

Filter.propTypes = {};

export default Filter;
