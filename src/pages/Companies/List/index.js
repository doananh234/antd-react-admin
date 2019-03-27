import React from 'react';
import { Avatar } from 'antd';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const CompaniesList = props => (
  <List {...props} resource="companies">
    <RestFieldItem
      source="thumbnail"
      header="companies.thumbnail"
      valueProp="src"
      component={<Avatar />}
    />
    <RestFieldItem source="name" header="companies.name" />
    <RestFieldItem source="description" header="companies.description" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

CompaniesList.propTypes = {};

export default CompaniesList;
