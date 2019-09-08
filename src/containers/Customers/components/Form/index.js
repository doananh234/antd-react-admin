import React from 'react';
import { Row, Col, Input } from 'antd';
import i18next from 'i18next';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestSelect from '../../../../components/RestInput/RestSelect';
import RestAvatarInput from '../../../../components/RestInput/RestAvatarInput';
import { NATIONALITIES, GENDERS, JOBS } from '../../../../configs/localData/index';
import RestFormDateTimePicker from '../../../../components/RestInput/RestDateTimePicker';
import { validateRegex } from '../../../../utils/validateUtils';

const customersForm = props => (
  <Row {...props} gutter={12}>
    <Col span={12}>
      <Row gutter={12}>
        <Col span={12}>
          <RestAvatarInput
            style={{ width: 150, height: 150 }}
            source="avatar"
            header="customers.avatar"
          />
        </Col>
        <Col span={12}>
          <RestInputItem
            source="fullName"
            header="customers.name"
            required
            rules={[
              {
                pattern: new RegExp('\\S+'),
                message: i18next.t('error.customername'),
              },
            ]}
          />
          <RestInputItem
            rules={[
              {
                type: 'email',
                message: i18next.t('error.email'),
              },
            ]}
            required
            source="email"
            header={i18next.t('customers.email')}
          />
        </Col>
        <Col span={24}>
          <Row gutter={16}>
            <Col md={12} sm={24}>
              <RestSelect
                ruleType="string"
                formatText={data => i18next.t(data)}
                resourceData={GENDERS}
                valueProp="value"
                titleProp="text"
                source="gender"
                header="customers.gender"
              />
              <RestSelect
                ruleType="string"
                formatText={data => data[i18next.language]}
                resourceData={JOBS}
                valueProp="value"
                titleProp="name"
                source="job"
                header="customers.job"
              />
              <RestInputItem source="social.twitter" header={i18next.t('customers.twitter')} />
            </Col>
            <Col md={12} sm={24}>
              <RestInputItem
                rules={[
                  {
                    pattern: validateRegex.phone,
                    message: i18next.t('error.phone'),
                  },
                ]}
                source="phoneNumber"
                header={i18next.t('customers.phoneNumber')}
              />
              <RestSelect
                autocomplete="off"
                ruleType="string"
                resourceData={NATIONALITIES}
                valueProp="nationality"
                titleProp="nationality"
                source="address"
                header="customers.address"
              />
              <RestFormDateTimePicker
                isShowTime={false}
                header="customers.dateOfBirth"
                source="dateOfBirth"
              />
              <RestInputItem source="social.facebook" header={i18next.t('customers.facebook')} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col span={12}>
      <RestInputItem source="social.linkin" header={i18next.t('customers.linkedin')} />
      <RestInputItem
        ContentComponent={Input.TextArea}
        source="note"
        header={i18next.t('customers.note')}
      >
        <Input.TextArea />
      </RestInputItem>
    </Col>
  </Row>
);

customersForm.propTypes = {};

export default customersForm;
