import React from 'react';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const ProductTypesForm = props => (
  <div {...props}>
    <RestInputItem source="name" title="name" />
  </div>
);

ProductTypesForm.propTypes = {};

export default ProductTypesForm;
