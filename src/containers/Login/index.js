import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Form, Button } from 'antd';
import i18n from 'i18next';
import { login as loginAction } from 'redux/auth/actions';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import MaterialInput from 'components/common/MaterialInput';
import logo from '../../assets/images/fullLogo.png';

const FormItem = Form.Item;

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const login = (params) => dispatch(loginAction(params));
  const handleSubmit = () => {
    // e.preventDefault();
    form
      .validateFields()
      .then((values) => {
        login(values);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <img alt="" src={logo} className="logo" />
      <div className="title">
        <div className="maintitle">{i18n.t('login.title')}</div>
        {/* <div className="mintitle">{i18n.t('login.botTitle')}</div> */}
      </div>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <FormItem
          name="email"
          rules={[
            {
              required: true,
              message: i18n.t('input.email.validateMsg.required'),
            },
            {
              type: 'email',
              message: i18n.t('input.email.validateMsg.invalid'),
            },
          ]}
        >
          <MaterialInput
            placeholder={i18n.t('input.email.placeholder')}
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
        <FormItem
          name="password"
          rules={[
            {
              required: true,
              message: i18n.t('input.password.validateMsg.required'),
            },
          ]}
        >
          <MaterialInput
            placeholder={i18n.t('input.password.placeholder')}
            prefix={
              <LockOutlined
                type="lock"
                style={{
                  color: 'rgba(0,0,0,.25)',
                  marginTop: '3px',
                  fontSize: '21px',
                }}
              />
            }
            type="password"
          />
        </FormItem>
        <div className="action-div">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="login-form-button"
          >
            {i18n.t('login.loginBtn')}
          </Button>
          <div
            style={{
              marginTop: 20,
              fontSize: '20px',
              width: '180px',
              height: '23px',
              textAlign: 'left',
            }}
          >
            <Link to="/forgot-password" href="/forgot-password">
              {i18n.t('forgotPassword.title')}
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

Login.propTypes = {};

export default withRouter(Login);
