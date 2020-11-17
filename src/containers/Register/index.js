import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'antd';
import { withRouter, Redirect, Link } from 'react-router-dom';
import i18n from 'i18next';
import { register as registerAction } from 'redux/auth/actions';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import MaterialInput from 'components/common/MaterialInput';
import { validateRegex } from '../../utils/validateUtils';

const FormItem = Form.Item;

const Register = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const register = (params) => dispatch(registerAction(params));

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields().then((values) => {
      if (values.password === values.comfirm && values.password.length >= 6) {
        register({
          username: values.username,
          email: values.email,
          password: values.password,
        });
      }
    });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback(i18n.t('input.confirmPassword.validateMsg.match'));
    } else {
      callback();
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="title">
        <span>{i18n.t('register.title')}</span>
      </div>
      <Form form={form} layout="vertical">
        <FormItem
          name="fullName"
          rules={[
            {
              required: true,
              message: i18n.t('input.fullName.validateMsg.required'),
            },
            {
              pattern: validateRegex.fullName,
              message: i18n.t('error.fullname'),
            },
          ]}
        >
          <MaterialInput
            placeholder={i18n.t('input.fullName.placeholder')}
            prefix={(
              <MailOutlined
                style={{
                  color: 'rgba(0,0,0,.25)',
                }}
              />
            )}
          />
        </FormItem>
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
            prefix={(
              <MailOutlined
                style={{
                  color: 'rgba(0,0,0,.25)',
                }}
              />
            )}
          />
        </FormItem>
        <FormItem
          name="password"
          rules={[
            {
              required: true,
              message: i18n.t('input.password.validateMsg.required'),
            },
            {
              pattern: validateRegex.password,
              message: i18n.t('error.password'),
            },
          ]}
        >
          <MaterialInput
            placeholder={i18n.t('input.password.placeholder')}
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
          />
        </FormItem>
        <FormItem
          hasFeedback
          name="comfirm"
          rules={[
            {
              required: true,
              message: i18n.t('input.confirmPassword.validateMsg.required'),
            },
            { validator: compareToFirstPassword },
          ]}
        >
          <MaterialInput
            placeholder={i18n.t('input.confirmPassword.placeholder')}
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
          />
        </FormItem>
        <div className="action-div">
          <Button
            onClick={handleSubmit}
            type="primary"
            className="login-form-button"
          >
            {i18n.t('button.submit')}
          </Button>
          <div style={{ marginTop: 30 }}>
            <span style={{ marginRight: 5 }}>{i18n.t('login.question')}</span>
            <Link to="/login">{i18n.t('login.loginBtn')}</Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

Register.propTypes = {};

export default withRouter(Register);
