import React from 'react';
import { Tabs, Row, Col, Input } from 'antd';
import I18n from 'i18next';
import RestSelect from 'components/RestInput/RestSelect';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';
import RestDateTimePicker from 'components/RestInput/RestDateTimePicker';
import ReferenceInput from 'containers/rest/ReferenceInput';
import Text from 'components/common/Text';
import {
  NATIONALITIES,
  CONTRACT_TYPES,
  QUALIFICATIONS,
} from 'configs/localData';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const UsersForm = props => (
  <div {...props}>
    <Tabs>
      <Tabs.TabPane tab={I18n.t('users.generalInfo')} key="general">
        <Row gutter={12}>
          <Col span={24}>
            <RestAvatarInput
              style={{
                width: 80,
                height: 80,
                borderRadius: 0,
              }}
              defaultIcon="picture"
              defaultText="picture"
              cropDimension={{ width: 150, height: 150 }}
              source="avatar"
              header="users.avatar"
            />
            <br />
          </Col>
          <Col span={12}>
            <RestInputItem source="familyName" header="users.familyName" />
            <RestInputItem isReference>
              <ReferenceInput source="userType" resource="userTypes">
                <RestSelect
                  header="users.userType"
                  source="userType"
                  titleProp="name"
                  valueProp="id"
                />
              </ReferenceInput>
            </RestInputItem>
            <RestInputItem isReference>
              <ReferenceInput source="mainClassIds" resource="classes">
                <RestSelect
                  header="users.userType"
                  source="mainClassIds"
                  titleProp="name"
                  valueProp="id"
                />
              </ReferenceInput>
            </RestInputItem>
          </Col>
          <Col span={12}>
            <RestInputItem source="middleName" header="users.middleName" />
            <RestInputItem isReference>
              <ReferenceInput source="departmentID" resource="departments">
                <RestSelect
                  header="users.departmentID"
                  source="departmentID"
                  titleProp="departmentName"
                  valueProp="id"
                />
              </ReferenceInput>
            </RestInputItem>
            <RestInputItem source="phoneNumber" header="users.phoneNumber" />
          </Col>
          <Col span={24}>
            <RestInputItem
              ContentComponent={Input.TextArea}
              source="note"
              header="users.note"
            />
          </Col>
        </Row>
      </Tabs.TabPane>
      <Tabs.TabPane tab={I18n.t('users.privateInfo')} key="privateInfo">
        <Text type="body" fontWeight="medium">
          {I18n.t('users.userInfo')}
        </Text>
        <br />
        <Row gutter={12}>
          <Col span={12}>
            <RestDateTimePicker
              isShowTime={false}
              source="birthday"
              header="users.birthday"
            />
          </Col>
          <Col span={12}>
            <RestInputItem source="email" header="fullName" />
          </Col>
          <Col span={24}>
            <RestInputItem source="email" header="users.email" />
            <RestInputItem source="currentAddress" header="users.address" />
            <RestSelect
              resourceData={NATIONALITIES}
              source="nationality"
              valueProp="nationality"
              titleProp="nationality"
              header="users.nationality"
            />
          </Col>
        </Row>
        <Text type="body" fontWeight="medium">
          {I18n.t('users.contract')}
        </Text>
        <br />

        <Row gutter={12}>
          <Col span={12}>
            <RestSelect
              resourceData={QUALIFICATIONS.map(e => ({
                ...e,
                text: I18n.t(e.text),
              }))}
              source="qualification"
              valueProp="value"
              titleProp="text"
              header="users.qualification"
            />
            <RestDateTimePicker
              isShowTime={false}
              source="joinDate"
              header="users.joinDate"
            />
          </Col>
          <Col span={12}>
            <RestInputItem source="experience" header="users.experience" />
            <RestSelect
              resourceData={CONTRACT_TYPES.map(e => ({
                ...e,
                text: I18n.t(e.text),
              }))}
              source="contractType"
              valueProp="value"
              titleProp="text"
              header="users.contractType"
            />
          </Col>
        </Row>
      </Tabs.TabPane>
    </Tabs>
  </div>
);

UsersForm.propTypes = {};

export default UsersForm;
