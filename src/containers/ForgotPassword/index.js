import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Icon, Divider } from 'antd';
import { forgotPassword as forgotPasswordAction } from '../../redux/auth/actions';
import ForgotPasswordStyleWrapper from './styles';
import MaterialInput from '../../components/common/MaterialInput';
import Text from '../../components/common/Text';

const FormItem = Form.Item;

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequestSuccess: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && !nextProps.loading && !nextProps.error) {
      this.setState({ isRequestSuccess: true });
    }
  }

  handleLogin = e => {
    e.preventDefault();
    const { form, forgotPassword } = this.props;
    form.validateFields((err, values) => {
      if (!err && values) {
        const { email } = values;
        forgotPassword(email);
      }
    });
  };

  render() {
    const { isRequestSuccess } = this.state;
    const { form, loading } = this.props;
    const { getFieldDecorator } = form;
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
              <Form onSubmit={this.handleLogin}>
                <div className="isoInputWrapper">
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [
                        { required: true, message: i18next.t('input.email.validateMsg.required') },
                        { type: 'email', message: i18next.t('input.email.validateMsg.invalid') },
                      ],
                    })(
                      <MaterialInput
                        placeholder={i18next.t('login.yourEmail')}
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      />
                    )}
                  </FormItem>
                </div>
                <div className="buttonWrapper">
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    onClick={this.handleLogin}
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
  }
}

ForgotPassword.propTypes = {
  loading: PropTypes.bool,
  forgotPassword: PropTypes.func,
  form: PropTypes.object,
  error: PropTypes.object,
};

const WrappedForgotPasswordForm = Form.create()(ForgotPassword);

export default connect(
  state => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }),
  dispatch => ({
    forgotPassword: email => dispatch(forgotPasswordAction(email)),
  })
)(WrappedForgotPasswordForm);
