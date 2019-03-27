import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="name" placeholder="name" />
    <RestInputItem source="description" placeholder="description" />
    <RestInputItem source="displayImage" placeholder="displayImage" />
    <RestInputItem source="startDate" placeholder="startDate" />
    <RestInputItem source="endDate" placeholder="endDate" />
  </div>
);

Filter.propTypes = {};

export default Filter;
