import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const StatusesShow = props => (
  <RestShow {...props} hasEdit resource="statuses">
    <RestFieldItem source="name" header="name" />
    <RestFieldItem source="color" header="color" />
  </RestShow>
);

export default StatusesShow;
