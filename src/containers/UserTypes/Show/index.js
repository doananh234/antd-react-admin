import React from 'react';
import RestShow from '../../rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const UserTypesShow = props => (
  <RestShow {...props} hasEdit resource="userTypes">
    <RestFieldItem source="id" header="userTypes.id" />
    <RestFieldItem source="name" header="userTypes.name" />
    <RestFieldItem source="description" header="userTypes.description" />
  </RestShow>
);

export default UserTypesShow;
