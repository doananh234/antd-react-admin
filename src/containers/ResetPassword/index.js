import React, { useState } from 'react';
import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'antd';
import { resetPassword as resetPasswordAction } from 'redux/auth/actions';
import { useHistory } from 'react-router';
import {
  MailOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import MaterialInput from 'components/common/MaterialInput';
import Text from 'components/common/Text';
import ResetPasswordStyleWrapper from './styles';

const FormItem = Form.Item;

const ResetPassword = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [state, setState] = useState({
    redirectToReferrer: isAuthenticated,
    isShowConfirmPassword: false,
    isShowPassword: false,
  });

  const resetPassword = (password, resetPasswordToken) => {
    dispatch(resetPasswordAction(password, resetPasswordToken));
  };

  const handleLogin = () => {
    const resetPasswordToken = history.location.search.replace('?token=', '');
    form.validateFields().then((values) => {
      if (values) {
        const { confirmPassword, password } = values;
        if (confirmPassword === password) {
          resetPassword(password, resetPasswordToken);
        } else {
          form.setFields({
            confirmPassword: {
              value: confirmPassword,
              errors: [
                new Error(
                  'Your password and confirmation password do not match.',
                ),
              ],
            },
          });
        }
      }
    });
  };

  const showPassword = (key) => () => {
    const currentData = state[key];
    setState({ [key]: !currentData });
  };

  const { isShowPassword, isShowConfirmPassword } = state;

  return (
    <ResetPasswordStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <Text type="h3" align="center">
            {i18next.t('login.resetPassword')}
          </Text>
          <div className="isoSignInForm">
            <Form form={form} onFinish={handleLogin}>
              <FormItem
                name="password"
                rules={[
                  {
                    required: true,
                    message: i18next.t('input.password.validateMsg.required'),
                  },
                ]}
              >
                <MaterialInput
                  type={isShowPassword ? undefined : 'password'}
                  placeholder={i18next.t('login.password')}
                  prefix=<MailOutlined
                    style={{
                      color: 'rgba(0,0,0,.25)',
                    }}
                  />
                  suffix={
                    isShowPassword ? (
                      <EyeInvisibleOutlined
                        onClick={showPassword('isShowPassword')}
                      />
                    ) : (
                      <EyeOutlined onClick={showPassword('isShowPassword')} />
                    )
                  }
                />
              </FormItem>
              <FormItem
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: i18next.t(
                      'input.confirmPassword.validateMsg.required',
                    ),
                  },
                ]}
              >
                <MaterialInput
                  type={isShowConfirmPassword ? undefined : 'password'}
                  placeholder={i18next.t('input.confirmPassword.placeholder')}
                  prefix=<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
                  suffix={
                    isShowConfirmPassword ? (
                      <EyeInvisibleOutlined
                        onClick={showPassword('isShowConfirmPassword')}
                      />
                    ) : (
                      <EyeOutlined
                        onClick={showPassword('isShowConfirmPassword')}
                      />
                    )
                  }
                />
              </FormItem>
              <div className="buttonWrapper">
                <Button type="primary" htmlType="submit" onClick={handleLogin}>
                  {i18next.t('button.reset')}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </ResetPasswordStyleWrapper>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
