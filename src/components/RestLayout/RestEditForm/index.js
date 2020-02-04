import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input } from 'antd';
import ButtonRow from '../FooterButtonRow';
import RestInputItem from '../../RestInput/RestInputItem';
import { RestInputContext } from '../../RestInput/RestInputContext';

const EDIT_BLACKLIST = ['createdAt', 'updatedAt'];

class FormComponent extends Component {
  getData = () =>
    new Promise(resolve => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const submitData = this.props.formatOnSubmit
            ? this.props.formatOnSubmit(values)
            : values;
          resolve(submitData);
        }
        resolve({});
      });
    });

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const submitData = this.props.formatOnSubmit
          ? this.props.formatOnSubmit(values)
          : values;
        this.props.onSubmit(submitData);
      }
    });
  };

  render() {
    const {
      record,
      loading,
      form,
      onBack,
      children,
      showModal,
      customSubmitButton,
      positionOfSubmitButton,
    } = this.props;

    if (!record) return null;

    if (!children || children.length === 0) {
      const components = Object.keys(record).map(key =>
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
        <>
          <Form>{components}</Form>
          {customSubmitButton !== undefined ? (
            customSubmitButton &&
            React.cloneElement(customSubmitButton, {
              loading,
              handleSubmit: this.handleSubmit,
              onBack,
              getData: this.getData,
            })
          ) : (
            <ButtonRow
              showModal={showModal}
              loading={loading}
              handleSubmit={this.handleSubmit}
              onBack={onBack}
            />
          )}
        </>
      );
    }
    return (
      <Row className="drawerContainer" gutter={16}>
        <Col
          className="content"
          md={positionOfSubmitButton === 'left' ? 20 : 24}
          xs={24}
        >
          <Form style={{ width: '100%' }}>
            <RestInputContext.Provider
              value={{
                form,
                record,
                getData: this.getData,
                handleSubmit: this.handleSubmit,
              }}
            >
              {children}
            </RestInputContext.Provider>
          </Form>
        </Col>
        <Col md={positionOfSubmitButton === 'left' ? 4 : 24} xs={24}>
          {customSubmitButton !== undefined ? (
            customSubmitButton &&
            React.cloneElement(customSubmitButton, {
              loading,
              handleSubmit: this.handleSubmit,
              onBack,
              getData: this.getData,
            })
          ) : (
            <ButtonRow
              showModal={showModal}
              loading={loading}
              handleSubmit={this.handleSubmit}
              onBack={onBack}
            />
          )}
        </Col>
      </Row>
    );
  }
}

const EditForm = Form.create()(FormComponent);
const RestEditForm = props => <EditForm {...props} />;

FormComponent.propTypes = {
  loading: PropTypes.bool,
  showModal: PropTypes.bool,
  form: PropTypes.object,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  positionOfSubmitButton: PropTypes.string,
  customSubmitButton: PropTypes.node,
  record: PropTypes.object,
  formatOnSubmit: PropTypes.func,
};

FormComponent.defaultProps = {
  positionOfSubmitButton: 'bottom',
  record: {},
};

export default RestEditForm;
