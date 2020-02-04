import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Form, Button, Checkbox } from 'antd';
import i18n from 'i18next';
import { login as loginAction } from 'redux/auth/slice';
import MaterialInput from '../../components/common/MaterialInput';
import Logo from '../../assets/images/logo.png';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  };

  render() {
    const { form, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { getFieldDecorator } = form;
    return (
      <div>
        <img className="logo" src={Logo} alt="" />
        <div className="title">
          <span>{i18n.t('login.title')}</span>
          <span className="highlight">{` ${i18n.t('appInfo.name')}`}</span>
        </div>
        <div className="sub-title">{`${i18n.t('login.subTitle')}`}</div>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.username.validateMsg.required'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.username.placeholder')}
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.password.validateMsg.required'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.password.placeholder')}
                type="password"
              />,
            )}
          </FormItem>
          <div className="sub-action-div">
            <FormItem>
              {getFieldDecorator('rememberMe')(
                <Checkbox>
                  <span className="note">{i18n.t('login.rememberMe')}</span>
                </Checkbox>,
              )}
            </FormItem>
            <Link to="/forgot-password" href="/forgot-password">
              <b className="note black">{i18n.t('forgotPassword.title')}</b>
            </Link>
          </div>
          <div className="action-div">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              {i18n.t('login.loginBtn')}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default withRouter(
  connect(
    state => ({
      isAuthenticated: state.auth.isAuthenticated,
    }),
    dispatch => ({
      login: params => {
        dispatch(loginAction(params));
      },
    }),
  )(Form.create()(Login)),
);
