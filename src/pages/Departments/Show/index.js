import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const DepartmentsShow = props => (
  <RestShow {...props} hasEdit resource="departments">
    <RestFieldItem source="name" header="name" />
    <RestFieldItem source="description" header="description" />
  </RestShow>
);

export default DepartmentsShow;
