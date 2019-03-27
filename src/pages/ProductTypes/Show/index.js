import React from 'react';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const ProductTypesShow = props => (
  <RestShow {...props} hasEdit resource="productTypes">
    <RestFieldItem source="name" header="name" />
  </RestShow>
);

export default ProductTypesShow;
