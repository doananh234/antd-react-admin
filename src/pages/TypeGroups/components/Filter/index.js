import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="displayName.vi" placeholder="displayName.vi" />
    <RestInputItem source="slug" placeholder="slug" />
  </div>
);

Filter.propTypes = {};

export default Filter;
