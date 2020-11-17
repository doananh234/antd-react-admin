import React, { useState } from 'react';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Divider } from 'antd';
import { forgotPassword as forgotPasswordAction } from 'redux/auth/actions';
import { MailOutlined } from '@ant-design/icons';
import MaterialInput from 'components/common/MaterialInput';
import Text from 'components/common/Text';
import ForgotPasswordStyleWrapper from './styles';

const FormItem = Form.Item;

const ForgotPassword = () => {
  const [isRequestSuccess, setSsRequestSuccess] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const forgotPassword = params => dispatch(forgotPasswordAction(params));
  const handleLogin = () => {
    form
      .validateFields()
      .then(values => {
        // if (values) {
        //   const { email } = values;
        //   forgotPassword(email).then(({ payload }) => {
        //     payload && setSsRequestSuccess(true);
        //   });
        // } hơi ẩu nha a
        forgotPassword(values);
        setSsRequestSuccess(true);
      })
      .catch(() => {});
  };
  if (isRequestSuccess) {
    return (
      <ForgotPasswordStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <Text type="h3" align="center">
              {i18next.t('forgotPassword.success.title')}
            </Text>
            <Text align="center" className="txtDescription">
              {i18next.t('forgotPassword.success.description')}
            </Text>
            <br />
            <Button type="primary">
              <Link to="/login">{i18next.t('login.loginBtn')}</Link>
            </Button>
          </div>
        </div>
      </ForgotPasswordStyleWrapper>
    );
  }
  return (
    <ForgotPasswordStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <Text type="h3" align="center">
            {i18next.t('forgotPassword.title')}
          </Text>
          <div className="isoSignInForm">
            <Form form={form} onFinish={handleLogin}>
              <div className="isoInputWrapper">
                <FormItem
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: i18next.t('input.email.validateMsg.required'),
                    },
                    {
                      type: 'email',
                      message: i18next.t('input.email.validateMsg.invalid'),
                    },
                  ]}
                >
                  <MaterialInput
                    placeholder={i18next.t('login.yourEmail')}
                    prefix={
                      <MailOutlined
                        style={{
                          color: 'rgba(0,0,0,.25)',
                          marginTop: '3px',
                          fontSize: '20px',
                        }}
                      />
                    }
                  />
                </FormItem>
              </div>
              <div className="buttonWrapper">
                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  onClick={handleLogin}
                >
                  {i18next.t('button.resetMyPassword')}
                </Button>
                <Divider>{i18next.t('text.or')}</Divider>
                <Button type="secondary">
                  <Link to="/login">{i18next.t('login.loginBtn')}</Link>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </ForgotPasswordStyleWrapper>
  );
};

ForgotPassword.propTypes = {};

export default ForgotPassword;
