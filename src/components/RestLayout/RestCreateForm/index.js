import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import ButtonRow from '../FooterButtonRow';
import { RestInputContext } from '../../RestInput/RestInputContext';

class FormComponent extends Component {
  getData = () =>
    new Promise(resolve => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const submitData = this.props.formatOnSubmit ? this.props.formatOnSubmit(values) : values;
          resolve(submitData);
        }
        resolve({});
      });
    });

  handleSubmit = () =>
    new Promise((resolve, reject) => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const submitData = this.props.formatOnSubmit ? this.props.formatOnSubmit(values) : values;
          this.props.onSubmit(submitData);
          resolve(values);
        } else {
          reject(err);
        }
      });
    });

  componentDidUpdate(prevProps) {
    if (prevProps.loading && !this.props.loading && !this.props.error) {
      this.props.form.resetFields();
    }
  }

  render() {
    const {
      loading,
      form,
      onBack,
      children,
      positionOfSubmitButton,
      customSubmitButton,
      record,
      showModal,
    } = this.props;

    return (
      <Form>
        <Row gutter={16}>
          <Col md={positionOfSubmitButton === 'left' ? 20 : 24} xs={24}>
            <RestInputContext.Provider value={{ form, record }}>
              {children}
            </RestInputContext.Provider>
          </Col>
          <Col md={positionOfSubmitButton === 'left' ? 4 : 24} xs={24}>
            {customSubmitButton ? (
              React.cloneElement(customSubmitButton, {
                handleSubmit: this.handleSubmit,
                onBack,
                getData: this.getData,
              })
            ) : (
              <ButtonRow
                type="create"
                loading={loading}
                showModal={showModal}
                handleSubmit={this.handleSubmit}
                onBack={onBack}
              />
            )}
          </Col>
        </Row>
      </Form>
    );
  }
}

const CreateForm = Form.create()(FormComponent);
const RestCreateForm = props => <CreateForm {...props} />;

FormComponent.propTypes = {
  loading: PropTypes.bool,
  form: PropTypes.object,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  positionOfSubmitButton: PropTypes.string,
  customSubmitButton: PropTypes.node,
  record: PropTypes.object,
  showModal: PropTypes.bool,
  formatOnSubmit: PropTypes.func,
  error: PropTypes.any,
};

FormComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  record: {},
};

export default RestCreateForm;
