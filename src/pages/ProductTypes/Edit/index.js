import React from 'react';
import Edit from '../../../containers/rest/Edit';
import Form from '../components/Form';

const ProductTypesEdit = props => (
  <Edit {...props} resource="productTypes">
    <Form />
  </Edit>
);

ProductTypesEdit.propTypes = {};

export default ProductTypesEdit;
