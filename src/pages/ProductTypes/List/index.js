import React from 'react';
import { Switch } from 'antd';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const ProductTypesList = props => (
  <List {...props} resource="productTypes">
    <RestFieldItem source="name" header="productTypes.name" />
    <RestFieldItem
      component={<Switch />}
      valueProp="checked"
      source="isActive"
      header="productTypes.isActive"
    />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

ProductTypesList.propTypes = {};

export default ProductTypesList;
