import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import MaterialInputWrapper from './styles';

const MaterialInput = ({ placeholder, prefix, suffix, disabled, ...params }) => (
  <MaterialInputWrapper isPrefix={!!prefix} isSuffix={!!suffix}>
    <Input {...params} disabled={disabled} />
    {prefix}
    <span className="suffix">{suffix}</span>
    <label>{placeholder}</label>
    <span className="bar" />
  </MaterialInputWrapper>
);

MaterialInput.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MaterialInput;
