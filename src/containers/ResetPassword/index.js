import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { Form, Icon, Button } from 'antd';
import { resetPassword as resetPasswordAction } from 'redux/auth/slice';
import { history } from '../../redux/store';
import ResetPasswordStyleWrapper from './styles';
import MaterialInput from '../../components/common/MaterialInput';
import Text from '../../components/common/Text';

const FormItem = Form.Item;

class ResetPassword extends Component {
  constructor(props) {
    const { isAuthenticated } = props;
    super(props);
    this.state = {
      redirectToReferrer: isAuthenticated,
      isShowConfirmPassword: false,
      isShowPassword: false,
    };
  }

  handleLogin = e => {
    e.preventDefault();
    const { form, resetPassword } = this.props;
    const resetPasswordToken = history.location.search.replace('?token=', '');
    form.validateFields((err, values) => {
      if (!err && values) {
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

  showPassword = key => () => {
    const currentData = this.state[key];
    this.setState({ [key]: !currentData });
  };

  render() {
    const { isShowPassword, isShowConfirmPassword } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <ResetPasswordStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <Text type="h3" align="center">
              {i18next.t('login.resetPassword')}
            </Text>
            <div className="isoSignInForm">
              <Form onSubmit={this.handleLogin}>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: i18next.t(
                          'input.password.validateMsg.required',
                        ),
                      },
                    ],
                  })(
                    <MaterialInput
                      type={isShowPassword ? undefined : 'password'}
                      placeholder={i18next.t('login.password')}
                      prefix=<Icon
                        type="mail"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                      suffix=<Icon
                        type={isShowPassword ? 'eye-invisible' : 'eye'}
                        onClick={this.showPassword('isShowPassword')}
                      />
                    />,
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('confirmPassword', {
                    rules: [
                      {
                        required: true,
                        message: i18next.t(
                          'input.confirmPassword.validateMsg.required',
                        ),
                      },
                    ],
                  })(
                    <MaterialInput
                      type={isShowConfirmPassword ? undefined : 'password'}
                      placeholder={i18next.t(
                        'input.confirmPassword.placeholder',
                      )}
                      prefix=<Icon
                        type="mail"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                      suffix=<Icon
                        type={isShowConfirmPassword ? 'eye-invisible' : 'eye'}
                        onClick={this.showPassword('isShowConfirmPassword')}
                      />
                    />,
                  )}
                </FormItem>
                <div className="buttonWrapper">
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={this.handleLogin}
                  >
                    {i18next.t('button.reset')}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </ResetPasswordStyleWrapper>
    );
  }
}

ResetPassword.propTypes = {
  isAuthenticated: PropTypes.bool,
  resetPassword: PropTypes.func,
  form: PropTypes.object,
};

const WrappedResetPasswordForm = Form.create()(ResetPassword);

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  dispatch => ({
    resetPassword: (password, resetPasswordToken) => {
      dispatch(resetPasswordAction(password, resetPasswordToken));
    },
  }),
)(WrappedResetPasswordForm);
