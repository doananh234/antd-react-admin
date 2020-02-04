import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Form, Icon, Button, Row, Col } from 'antd';
import i18n from 'i18next';
import { registerWithToken as registerWithTokenAction } from 'redux/auth/slice';
import MaterialInput from '../../components/common/MaterialInput';
import FormUploadAvatar from '../../components/form/FormUploadAvatar';
import { history } from '../../redux/store';

const FormItem = Form.Item;

class Invite extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const token = history.location.search.replace('?token=', '');
        if (
          values.password === values.confirmPassword &&
          values.password.length >= 6
        ) {
          this.props.register({
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            avatar: values.avatar,
            token,
          });
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
          <FormUploadAvatar
            style={{
              width: 100,
              height: 100,
              margin: 'auto',
              marginBottom: 20,
            }}
            source="avatar"
          />
          <Row gutter={16}>
            <Col span={12}>
              <FormItem>
                {getFieldDecorator('firstName', {
                  rules: [
                    {
                      required: true,
                      message: i18n.t('input.firstName.validateMsg.required'),
                    },
                  ],
                })(
                  <MaterialInput
                    placeholder={i18n.t('input.firstName.placeholder')}
                  />,
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem>
                {getFieldDecorator('lastName', {
                  rules: [
                    {
                      required: true,
                      message: i18n.t('input.lastName.validateMsg.required'),
                    },
                  ],
                })(
                  <MaterialInput
                    placeholder={i18n.t('input.lastName.placeholder')}
                  />,
                )}
              </FormItem>
            </Col>
          </Row>
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
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirmPassword', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.confirmPassword.validateMsg.required'),
                },
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
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {i18n.t('button.submit')}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

Invite.propTypes = {
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
      register: params => dispatch(registerWithTokenAction(params)),
    }),
  )(Form.create()(Invite)),
);
