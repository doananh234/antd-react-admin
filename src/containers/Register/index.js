import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Form, Icon, Button } from 'antd';
import i18n from 'i18next';
import { registerAction } from '../../redux/auth/actions';
import MaterialInput from '../../components/common/MaterialInput';

const FormItem = Form.Item;

class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.password === values.confirmPassword && values.password.length >= 6) {
          this.props.register({ email: values.email, password: values.password });
        }
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
        <div className="title">
          <span>{i18n.t('register.title')}</span>
        </div>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: i18n.t('input.email.validateMsg.required') }],
            })(
              <MaterialInput
                placeholder={i18n.t('input.email.placeholder')}
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: i18n.t('input.password.validateMsg.required') }],
            })(
              <MaterialInput
                placeholder={i18n.t('input.password.placeholder')}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirmPassword', {
              rules: [
                { required: true, message: i18n.t('input.confirmPassword.validateMsg.required') },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.confirmPassword.placeholder')}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
              />
            )}
          </FormItem>
          <div className="action-div">
            <Button type="primary" htmlType="submit" className="login-form-button">
              {i18n.t('button.submit')}
            </Button>
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
    })
  )(Form.create()(Register))
);
