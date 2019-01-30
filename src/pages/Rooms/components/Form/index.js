import React from 'react';
import { Row, Col } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Form = () => (
  <Row>
    <Col md={24}>
      <RestInputItem title="name" source="name" />
      <RestInputItem title="image" source="image" />
    </Col>
  </Row>
);
Form.propTypes = {};

export default Form;
