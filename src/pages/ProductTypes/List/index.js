import React from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const ProductTypesList = props => (
  <List {...props} resource="productTypes">
    <RestFieldItem source="name" title="name" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

ProductTypesList.propTypes = {};

export default ProductTypesList;
