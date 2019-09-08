import React from 'react';
import Create from '../../rest/Create';
import Form from '../components/Form';

const CustomersCreate = props => (
  <Create {...props} resource="customers">
    <Form />
  </Create>
);

CustomersCreate.propTypes = {};

export default CustomersCreate;
