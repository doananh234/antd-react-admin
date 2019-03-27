import React from 'react';
import { Row, Col } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestAvatarInput from '../../../../components/RestInput/RestAvatarInput';

const CompaniesForm = props => (
  <div {...props}>
    <Row type="flex" align="middle">
      <Col span={12}>
        <RestAvatarInput
          style={{ width: 170, height: 170 }}
          source="thumbnail"
          header="clients.thumbNail"
        />
      </Col>
      <Col span={12}>
        <RestInputItem source="name" header="companies.name" />
        <RestInputItem source="description" header="companies.description" />
      </Col>
    </Row>
  </div>
);

CompaniesForm.propTypes = {};

export default CompaniesForm;
