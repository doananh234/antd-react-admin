import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import { RestInputContext } from '../../RestInput/RestInputContext';
import ButtonRow from '../../RestLayout/FooterButtonRow';

class OptimizeComponent extends Component {
  hasError = values => {
    let hasError;
    this.props.validateFields.forEach(item => {
      if (!values[item]) {
        hasError = true;
      }
    });
    return hasError;
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const submitData = this.props.formatOnSubmit ? this.props.formatOnSubmit(values) : values;
        if (this.props.validateFields && !this.hasError(values)) {
          this.props.onSubmitValues(submitData);
          if (this.props.extraSubmitAction) this.props.extraSubmitAction();
        }

        if (!this.props.validateFields) {
          this.props.onSubmitValues(submitData);
        }
      }
    });
  };

  render() {
    const {
      loading,
      form,
      onBack,
      children,
      showModal,
      positionOfSubmitButton,
      isHideButtonRow,
    } = this.props;
    return (
      <Form style={{ width: '100%' }} onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col md={positionOfSubmitButton === 'left' ? 20 : 24} xs={24}>
            <RestInputContext.Provider
              value={{
                form,
                handleSubmit: this.handleSubmit,
              }}
            >
              {children}
            </RestInputContext.Provider>
          </Col>
          <Col md={positionOfSubmitButton === 'left' ? 4 : 24} xs={24}>
            {isHideButtonRow && (
              <ButtonRow
                showModal={showModal}
                loading={loading}
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

const OptimizeComponentWrapper = Form.create()(OptimizeComponent);
const FormComponentWrapper = props => <OptimizeComponentWrapper {...props} />;

OptimizeComponent.propTypes = {
  loading: PropTypes.bool,
  showModal: PropTypes.bool,
  form: PropTypes.object,
  onBack: PropTypes.func,
  onSubmitValues: PropTypes.func,
  children: PropTypes.node,
  validateFields: PropTypes.array,
  positionOfSubmitButton: PropTypes.string,
  extraSubmitAction: PropTypes.func,
  formatOnSubmit: PropTypes.func,
  // error: PropTypes.any,
  isHideButtonRow: PropTypes.bool,
};

OptimizeComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  validateFields: [],
};

export default FormComponentWrapper;
