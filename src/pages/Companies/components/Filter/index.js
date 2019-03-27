import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="name" placeholder="companies.name" />
  </div>
);

Filter.propTypes = {};

export default Filter;
