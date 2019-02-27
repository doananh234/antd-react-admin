import React from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const ProductTypesList = props => (
  <List {...props} onEditHeaderSuccess={onEditHeaderSuccess} resource="productTypes">
    <RestFieldItem isEditHeader isEditOnCel source="name" title="name" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

const onEditHeaderSuccess = data => {
  console.log('data', data);
};

ProductTypesList.propTypes = {};

export default ProductTypesList;
