import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const CompaniesShow = props => (
  <RestShow {...props} hasEdit resource="companies">
    <RestFieldItem source="name" header="name" />
  </RestShow>
);

export default CompaniesShow;
