import React from 'react';
import { Switch } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const ProductTypesForm = props => (
  <div {...props}>
    <RestInputItem source="name" header="productTypes.name" />
    <RestInputItem
      valuePropName="checked"
      ruleType="boolean"
      source="isActive"
      header="productTypes.isActive"
    >
      <Switch />
    </RestInputItem>
  </div>
);

ProductTypesForm.propTypes = {};

export default ProductTypesForm;
