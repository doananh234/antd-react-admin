import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

const FormItem = Form.Item;

const FormItemUI = props => {
  const {
    source,
    header,
    required,
    requiredMessage,
    form,
    defaultValue,
    ruleType,
    rules,
    children,
    valuePropName,
    errorMessageType,
  } = props;
  return (
    <FormItem label={header}>
      {form.getFieldDecorator(source, {
        rules: [
          { required, message: requiredMessage },
          { type: ruleType, message: errorMessageType },
          ...rules,
        ],
        valuePropName,
        initialValue: defaultValue,
      })(children)}
    </FormItem>
  );
};

FormItemUI.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.array,
  valuePropName: PropTypes.string,
  ruleType: PropTypes.string,
  children: PropTypes.node,
  errorMessageType: PropTypes.string,
};
FormItemUI.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  errorMessageType: 'The field is error format.',
  rules: [],
  valuePropName: 'value',
};

export default FormItemUI;
