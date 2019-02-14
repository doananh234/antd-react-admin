import React from 'react';
import { Row, Col } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Form = () => (
  <Row>
    <Col md={24}>
      <RestInputItem title="name" source="shortName.vi" />
      <RestInputItem title="slug" source="slug" />
    </Col>
  </Row>
);
Form.propTypes = {};

export default Form;
