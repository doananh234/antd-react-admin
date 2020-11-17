import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import _, { zipObjectDeep } from 'lodash';
import ButtonRow from '../FooterButtonRow';
import { RestInputContext } from '../../RestInput/RestInputContext';

const FormComponent = ({
  loading,
  onBack,
  children,
  positionOfSubmitButton,
  customSubmitButton,
  record,
  showModal,
  formatOnSubmit,
  onSubmit,
  customOnBack,
}) => {
  const [form] = Form.useForm();
  const getData = () =>
    new Promise((resolve) => {
      form.validateFields().then((values) => {
        const parseToObj = zipObjectDeep(Object.keys(values), _.values(values));
        const submitData = formatOnSubmit
          ? formatOnSubmit(parseToObj)
          : parseToObj;
        resolve(submitData);
        resolve({});
      });
    });

  const handleSubmit = () =>
    new Promise((resolve, reject) => {
      form
        .validateFields()
        .then((values) => {
          const parseToObj = zipObjectDeep(
            Object.keys(values),
            _.values(values),
          );
          const submitData = formatOnSubmit
            ? formatOnSubmit(parseToObj)
            : parseToObj;
          onSubmit(submitData);
          resolve(values);
        })
        .catch((err) => {
          reject(err);
        });
    });

  return (
    <div className="drawerContainer">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col
            className="content"
            md={positionOfSubmitButton === 'left' ? 20 : 24}
            xs={24}
          >
            <div className="content-form">
              <RestInputContext.Provider value={{ form, record }}>
                {children}
              </RestInputContext.Provider>
            </div>
          </Col>
          <Col
            className="footer"
            md={positionOfSubmitButton === 'left' ? 4 : 24}
            xs={24}
          >
            {customSubmitButton ? (
              React.cloneElement(customSubmitButton, {
                onBack,
                getData,
              })
            ) : (
              <ButtonRow
                type="create"
                loading={loading}
                showModal={showModal}
                handleSubmit={handleSubmit}
                onBack={customOnBack || onBack}
              />
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

FormComponent.propTypes = {
  loading: PropTypes.bool,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  positionOfSubmitButton: PropTypes.string,
  customSubmitButton: PropTypes.node,
  record: PropTypes.object,
  showModal: PropTypes.bool,
  formatOnSubmit: PropTypes.func,
  customOnBack: PropTypes.func,
};

FormComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  record: {},
};

export default FormComponent;
