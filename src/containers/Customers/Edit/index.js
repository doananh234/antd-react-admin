import React from 'react';
import { Row, Col } from 'antd';
import _ from 'lodash';
// import i18next from 'i18next';
import Edit from '../../rest/Edit';
import CustomerDetail from '../components/CustomerDetail';
import CustomerContact from '../components/CustomerContact';

const CustomersEdit = props => (
  <Edit
    {...props}
    formatOnSubmit={values => _.omit(values, 'email')}
    customEditButton={null}
    noCardWrapper
    resource="customers"
  >
    <Row gutter={16}>
      <Col md={8}>
        <CustomerContact />
        <CustomerDetail />
      </Col>
      <Col md={16} />
    </Row>
  </Edit>
);

CustomersEdit.propTypes = {};

export default CustomersEdit;
