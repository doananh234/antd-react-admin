import React from 'react';
import Create from '../../../containers/rest/Create';
import Form from '../components/Form';

const ProductTypesCreate = props => (
  <Create {...props} resource="productTypes">
    <Form />
  </Create>
);

ProductTypesCreate.propTypes = {};

export default ProductTypesCreate;
