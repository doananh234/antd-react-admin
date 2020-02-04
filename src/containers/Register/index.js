import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Icon, Button } from 'antd';
import { withRouter, Redirect, Link } from 'react-router-dom';
import i18n from 'i18next';
import { register as registerAction } from 'redux/auth/slice';
import MaterialInput from '../../components/common/MaterialInput';
import { validateRegex } from '../../utils/validateUtils';

const FormItem = Form.Item;

class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.password === values.comfirm && values.password.length >= 6) {
          this.props.register({
            username: values.username,
            email: values.email,
            password: values.password,
          });
        }
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback(i18n.t('input.confirmPassword.validateMsg.match'));
    } else {
      callback();
    }
  };

  render() {
    const { form, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { getFieldDecorator } = form;
    return (
      <div>
        <div className="title">
          <span>{i18n.t('register.title')}</span>
        </div>
        <Form layout="vertical">
          <FormItem>
            {getFieldDecorator('fullName', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.fullName.validateMsg.required'),
                },
                {
                  pattern: validateRegex.fullName,
                  message: i18n.t('error.fullname'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.fullName.placeholder')}
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.email.validateMsg.required'),
                },
                {
                  type: 'email',
                  message: i18n.t('input.email.validateMsg.invalid'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.email.placeholder')}
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
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
                {
                  pattern: validateRegex.password,
                  message: i18n.t('error.password'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.password.placeholder')}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
              />,
            )}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('comfirm', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.confirmPassword.validateMsg.required'),
                },
                { validator: this.compareToFirstPassword },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.confirmPassword.placeholder')}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
              />,
            )}
          </FormItem>
          <div className="action-div">
            <Button
              onClick={this.handleSubmit}
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
  }
}

Register.propTypes = {
  form: PropTypes.object,
  register: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default withRouter(
  connect(
    state => ({
      isAuthenticated: state.auth.isAuthenticated,
    }),
    dispatch => ({
      register: params => dispatch(registerAction(params)),
    }),
  )(Form.create()(Register)),
);
