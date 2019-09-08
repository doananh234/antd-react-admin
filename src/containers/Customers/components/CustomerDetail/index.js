import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Row, Col, Input } from 'antd';
import i18next from 'i18next';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestSelect from '../../../../components/RestInput/RestSelect';
import RestFormDateTimePicker from '../../../../components/RestInput/RestDateTimePicker';
import SaveButton from '../../../../components/RestActions/SaveButton';
import { GENDERS, NATIONALITIES, JOBS } from '../../../../configs/localData';
import { validateRegex } from '../../../../utils/validateUtils';

const CustomerDetail = () => (
  <Card
    className="box"
    title={<span className="txtHeader">{i18next.t('customers.detail.about')}</span>}
    extra={<SaveButton className="icEdit" />}
  >
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
      <Col md={12} sm={24}>
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
          source="dateOfBirth"
          header="customers.dateOfBirth"
        />
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
      </Col>
      <Col span={24}>
        <RestInputItem source="social.facebook" header={i18next.t('customers.facebook')} />
        <RestInputItem source="social.twitter" header={i18next.t('customers.twitter')} />
        <RestInputItem source="social.linkin" header={i18next.t('customers.linkedin')} />
        <RestInputItem
          ContentComponent={Input.TextArea}
          source="note"
          header={i18next.t('customers.note')}
        />
      </Col>
    </Row>
  </Card>
);

CustomerDetail.propTypes = {};

export default CustomerDetail;
