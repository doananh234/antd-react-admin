import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const TypeGroupsShow = props => (
  <RestShow {...props} hasEdit resource="typeGroups">
    <RestFieldItem source="displayName.vi" title="displayName.vi" />
    <RestFieldItem source="slug" title="slug" />
  </RestShow>
);

export default TypeGroupsShow;
