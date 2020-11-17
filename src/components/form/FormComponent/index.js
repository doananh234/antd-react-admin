import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import { RestInputContext } from '../../RestInput/RestInputContext';
import ButtonRow from '../../RestLayout/FooterButtonRow';

const OptimizeComponent = ({
  loading,
  onBack,
  children,
  showModal,
  positionOfSubmitButton,
  isHideButtonRow,
  validateFields,
  onSubmitValues,
  extraSubmitAction,
  formatOnSubmit,
}) => {
  const [form] = Form.useForm();
  const hasError = (values) => {
    let hasError;
    validateFields.forEach((item) => {
      if (!values[item]) {
        hasError = true;
      }
    });
    return hasError;
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const submitData = formatOnSubmit ? formatOnSubmit(values) : values;
        if (validateFields && !hasError(values)) {
          onSubmitValues(submitData);
          if (extraSubmitAction) extraSubmitAction();
        }

        if (!validateFields) {
          onSubmitValues(submitData);
        }
      })
      .catch(() => {});
  };
  return (
    <Form form={form} style={{ width: '100%' }} onFinish={handleSubmit}>
      <Row gutter={16}>
        <Col md={positionOfSubmitButton === 'left' ? 20 : 24} xs={24}>
          <RestInputContext.Provider
            value={{
              form,
              handleSubmit,
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
              handleSubmit={handleSubmit}
              onBack={onBack}
            />
          )}
        </Col>
      </Row>
    </Form>
  );
};

OptimizeComponent.propTypes = {
  loading: PropTypes.bool,
  showModal: PropTypes.bool,
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

export default OptimizeComponent;
