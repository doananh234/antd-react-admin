import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestEditor from 'components/RestInput/RestEditor';
import RestDateTimePicker from 'components/RestInput/RestDateTimePicker';
import FormStyles from './styles';

const Form = ({ form, record }) => {
  return (
    <RestInputContext.Provider value={{ form, record }}>
      <FormStyles>
        <RestAvatarInput
          style={{
            marginBottom: 30,
            width: 150,
            height: 150,
            borderRadius: '50%',
          }}
          className="avatar-section"
          defaultIcon="picture"
          defaultText="picture"
          cropDimension={{ width: 300, height: 300 }}
          hasCrop={false}
          source="customer.avatar"
        />
        <Row gutter={16} className="form-section">
          {/* <Col span={24}>
            <RestInputItem
              defaultValue={record?.username}
              source="username"
              header="profile.username"
            />
          </Col> */}
          <Col span={12}>
            <RestInputItem
              required
              source="displayName"
              header="profile.fullName"
            />
          </Col>
          <Col span={12}>
            <RestInputItem source="email" header="profile.email" disabled />
          </Col>
          <Col span={12}>
            <RestInputItem
              required
              source="customer.address"
              header="profile.address"
            />
          </Col>
          <Col span={12}>
            <RestInputItem
              required
              source="customer.national"
              header="profile.national"
            />
          </Col>
          <Col span={24}>
            <RestInputItem
              required
              source="customer.facebookLink"
              header="profile.facebookLink"
            />
          </Col>
          <Col span={12}>
            <RestInputItem
              rules={[
                {
                  min: 8,
                  message: 'invalid phone number',
                },
              ]}
              source="customer.phoneNumber"
              header="profile.phone"
            />
          </Col>
          <Col span={12}>
            <RestDateTimePicker
              isShowTime={false}
              header="profile.birthday"
              source="customer.birthday"
              record={record}
            />
          </Col>
        </Row>
      </FormStyles>
      <RestEditor source="customer.note" />
    </RestInputContext.Provider>
  );
};

Form.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
};

export default Form;
