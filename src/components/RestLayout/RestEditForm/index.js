import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Spin } from 'antd';
import _, { isEmpty, zipObjectDeep } from 'lodash';
import ButtonRow from '../FooterButtonRow';
import RestInputItem from '../../RestInput/RestInputItem';
import { RestInputContext } from '../../RestInput/RestInputContext';

const EDIT_BLACKLIST = ['createdAt', 'updatedAt'];

const EditFormComponent = ({
  record,
  loading,
  onBack,
  children,
  showModal,
  customSubmitButton,
  positionOfSubmitButton,
  onSubmit,
  formatOnSubmit,
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

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const parseToObj = zipObjectDeep(Object.keys(values), _.values(values));
      const submitData = formatOnSubmit
        ? formatOnSubmit(parseToObj)
        : parseToObj;
      onSubmit(submitData);
    });
  };
  if (isEmpty(record)) return <Spin />;

  if (!children || children.length === 0) {
    const components = Object.keys(record).map((key) =>
      EDIT_BLACKLIST.indexOf(key) > -1 ? null : (
        <RestInputItem
          type={typeof record[key]}
          disabled={key === 'id'}
          form={form}
          defaultValue={record[key]}
          name={key}
          header={key}
        >
          <Input />
        </RestInputItem>
      ),
    );

    return (
      <Form layout="vertical" onFinish={handleSubmit} form={form}>
        {components}
        {customSubmitButton !== undefined ? (
          customSubmitButton &&
          React.cloneElement(customSubmitButton, {
            loading,
            onBack,
            getData,
          })
        ) : (
          <ButtonRow
            showModal={showModal}
            loading={loading}
            handleSubmit={handleSubmit}
            onBack={customOnBack || onBack}
          />
        )}
      </Form>
    );
  }
  return (
    <div className="drawerContainer">
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        style={{ width: '100%' }}
      >
        <Row gutter={16}>
          <Col
            className="content"
            md={positionOfSubmitButton === 'left' ? 20 : 24}
            xs={24}
          >
            <div className="content-form">
              <RestInputContext.Provider
                value={{
                  form,
                  record,
                  getData,
                  handleSubmit,
                }}
              >
                {children}
              </RestInputContext.Provider>
            </div>
          </Col>
          <Col md={positionOfSubmitButton === 'left' ? 4 : 24} xs={24}>
            {customSubmitButton !== undefined ? (
              customSubmitButton &&
              React.cloneElement(customSubmitButton, {
                loading,
                onBack,
                getData,
              })
            ) : (
              <ButtonRow
                showModal={showModal}
                loading={loading}
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
EditFormComponent.propTypes = {
  loading: PropTypes.bool,
  showModal: PropTypes.bool,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  positionOfSubmitButton: PropTypes.string,
  customSubmitButton: PropTypes.node,
  record: PropTypes.object,
  formatOnSubmit: PropTypes.func,
  customOnBack: PropTypes.func,
};

EditFormComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  record: {},
};

export default EditFormComponent;
