import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import ButtonRow from '../FooterButtonRow';
import { RestInputContext } from '../../RestInput/RestInputContext';

const FormComponent = props => {
  const getData = () =>
    new Promise(resolve => {
      props.form.validateFields((err, values) => {
        if (!err) {
          const submitData = props.formatOnSubmit
            ? props.formatOnSubmit(values)
            : values;
          resolve(submitData);
        }
        resolve({});
      });
    });

  const handleSubmit = () =>
    new Promise((resolve, reject) => {
      props.form.validateFields((err, values) => {
        if (!err) {
          const submitData = props.formatOnSubmit
            ? props.formatOnSubmit(values)
            : values;
          props.onSubmit(submitData);
          resolve(values);
        } else {
          reject(err);
        }
      });
    });

  const {
    loading,
    form,
    onBack,
    children,
    positionOfSubmitButton,
    customSubmitButton,
    record,
    showModal,
  } = props;

  return (
    <Row className="drawerContainer" gutter={16}>
      <Col
        className="content"
        md={positionOfSubmitButton === 'left' ? 20 : 24}
        xs={24}
      >
        <Form>
          <RestInputContext.Provider value={{ form, record }}>
            {children}
          </RestInputContext.Provider>
        </Form>
      </Col>
      <Col
        className="footer"
        md={positionOfSubmitButton === 'left' ? 4 : 24}
        xs={24}
      >
        {customSubmitButton ? (
          React.cloneElement(customSubmitButton, {
            handleSubmit,
            onBack,
            getData,
          })
        ) : (
          <ButtonRow
            type="create"
            loading={loading}
            showModal={showModal}
            handleSubmit={handleSubmit}
            onBack={onBack}
          />
        )}
      </Col>
    </Row>
  );
};

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
};

FormComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  record: {},
};

export default RestCreateForm;
