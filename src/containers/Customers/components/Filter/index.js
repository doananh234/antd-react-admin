import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="name" placeholder="customers.name" />
    <RestInputItem source="email" placeholder="customers.email" />
    <RestInputItem source="phoneNumber" placeholder="customers.phoneNumber" />
    <RestInputItem source="job" placeholder="customers.job" />
    <RestInputItem source="username" placeholder="customers.username" />
    <RestInputItem source="gender" placeholder="customers.gender" />
    <RestInputItem source="nationality" placeholder="customers.nationality" />
    <RestInputItem source="facebook" placeholder="customers.facebook" />
    <RestInputItem source="twitter" placeholder="customers.twitter" />
    <RestInputItem source="comment" placeholder="customers.comment" />
    <RestInputItem source="howToKnowEnouvoSpace" placeholder="customers.howToKnowEnouvoSpace" />
    <RestInputItem source="note" placeholder="customers.note" />
    <RestInputItem source="departDate" placeholder="customers.departDate" />
  </div>
);

Filter.propTypes = {};

export default Filter;
