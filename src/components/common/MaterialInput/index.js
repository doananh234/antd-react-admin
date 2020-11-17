import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import MaterialInputWrapper from './styles';

const MaterialInput = ({
  placeholder,
  prefix,
  suffix,
  disabled,
  ...params
}) => (
  <MaterialInputWrapper isPrefix={!!prefix} isSuffix={!!suffix}>
    <Input
      {...params}
      placeholder={placeholder}
      autoComplete="new-password"
      disabled={disabled}
    />

    {prefix}
    <span className="suffix">{suffix}</span>
    <label style={{ color: '#05060A', fontSize: '20px' }}>{placeholder}</label>
    <span className="bar" />
  </MaterialInputWrapper>
);

MaterialInput.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
  disabled: PropTypes.bool,
};

export default MaterialInput;
