import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem/index';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="message" placeholder="notifications.message" />
    <RestInputItem source="createdAt" placeholder="notifications.createdAt" />
  </div>
);

Filter.propTypes = {};

export default Filter;
