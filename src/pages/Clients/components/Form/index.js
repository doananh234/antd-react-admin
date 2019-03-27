import React from 'react';
import { Row, Col, Switch } from 'antd';
import i18next from 'i18next';
import ReferenceInput from '../../../../containers/rest/ReferenceInput';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestSelect from '../../../../components/RestInput/RestSelect';
import RestAvatarInput from '../../../../components/RestInput/RestAvatarInput';
import { GENDER } from '../../../../configs/localData';

const ClientsForm = props => (
  <Row {...props} gutter={12}>
    <Col span={12}>
      <RestAvatarInput style={{ width: 200, height: 200 }} source="avatar" header="clients.avatar" />
    </Col>
    <Col span={12}>
      <RestInputItem source="firstName" header="clients.firstName" />
      <RestInputItem source="lastName" header="clients.lastName" />
      <RestInputItem source="fullName" header="clients.fullName" />
    </Col>
    <Col span={12}>
      <RestInputItem source="email" header="clients.email" />
      <RestInputItem source="phoneNumber" header="clients.phoneNumber" />
      <RestSelect
        resourceData={GENDER}
        formatText={data => i18next.t(data)}
        valueProp="value"
        titleProp="text"
        source="gender"
        header="gender.title"
      />
    </Col>
    <Col span={12}>
      <RestInputItem source="address" header="clients.address" />
      <ReferenceInput source="companyId" valueProp="id" titleProp="name" resource="companies">
        <RestSelect source="companyId" valueProp="id" titleProp="name" header="clients.company" />
      </ReferenceInput>
      <RestInputItem ruleType="boolean" source="isActive" header="clients.isActive">
        <Switch />
      </RestInputItem>
    </Col>
  </Row>
);

ClientsForm.propTypes = {};

export default ClientsForm;
