import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const TitlesShow = props => (
  <RestShow {...props} hasEdit resource="titles">
    <RestFieldItem source="name" header="name" />
    <RestFieldItem source="description" header="description" />
  </RestShow>
);

export default TitlesShow;
