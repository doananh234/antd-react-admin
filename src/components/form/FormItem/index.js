import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Input } from 'antd';
import { omit } from 'lodash';
import { FormItemWrapper } from './styles';

const FormItemUI = ({
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
  className,
  formOptions,
  disabled,
  label,
  subfix,
  ...props
}) => (
  <FormItemWrapper
    className={className}
    label={
      <>
        {I18n.t(label || header)}
        {subfix}
      </>
    }
    name={source}
    {...props}
    rules={[
      { required, message: I18n.t(requiredMessage) },
      ruleType !== undefined && {
        type: ruleType,
        message: `${I18n.t('error.validateType')} ${I18n.t(
          ruleType || 'ruleType.string',
        )}`,
      },
      ...rules,
    ]}
    normalize={(value) => (ruleType === 'number' && value === null ? 0 : value)}
    initialValue={
      defaultValue && defaultValue !== 'undefined' ? defaultValue : undefined
    }
    valuePropName={
      ruleType === 'boolean'
        ? valuePropName || 'checked'
        : valuePropName || 'value'
    }
    {...formOptions}
  >
    {React.cloneElement(children, {
      ...omit(props, 'handleSubmit'),
      disabled,
    })}
  </FormItemWrapper>
);

FormItemUI.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  subfix: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.array,
  valuePropName: PropTypes.string,
  ruleType: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  formOptions: PropTypes.object,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};
FormItemUI.defaultProps = {
  required: false,
  requiredMessage: 'error.required',
  rules: [],
  // formOptions: { trigger: 'onBlur' },
  disabled: false,
  children: <Input />,
};

export default FormItemUI;
