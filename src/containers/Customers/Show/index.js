import React from 'react';
import RestShow from '../../rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const CustomersShow = props => (
  <RestShow {...props} hasEdit resource="customers">
    <RestFieldItem source="name" header="customers.name" />
    <RestFieldItem source="email" header="customers.email" />
    <RestFieldItem source="phoneNumber" header="customers.phoneNumber" />
    <RestFieldItem source="job" header="customers.job" />
    <RestFieldItem source="username" header="customers.username" />
    <RestFieldItem source="gender" header="customers.gender" />
    <RestFieldItem source="nationality" header="customers.nationality" />
    <RestFieldItem source="facebook" header="customers.facebook" />
    <RestFieldItem source="twitter" header="customers.twitter" />
    <RestFieldItem source="comment" header="customers.comment" />
    <RestFieldItem source="howToKnowEnouvoSpace" header="customers.howToKnowEnouvoSpace" />
    <RestFieldItem source="note" header="customers.note" />
    <RestFieldItem source="departDate" header="customers.departDate" />
  </RestShow>
);

export default CustomersShow;
