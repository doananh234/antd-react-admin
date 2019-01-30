import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import FormItem from '../FormItem';

const CheckboxGroup = Checkbox.Group;
const FormCheckbox = ({
  source,
  title,
  required,
  requiredMessage,
  icon,
  placeholder,
  form,
  defaultValue,
  dataResource,
  valueProp,
  titleProp,
  rules,
  ...props
}) => (
  <FormItem {...props} title={title} required={required} defaultValue={defaultValue}>
    <CheckboxGroup placeholder={placeholder}>
      {dataResource.map(data => (
        <Checkbox key={data[valueProp]} value={data[valueProp]}>
          {data[titleProp]}
        </Checkbox>
      ))}
    </CheckboxGroup>
  </FormItem>
);

FormCheckbox.propTypes = {
  source: PropTypes.string,
  title: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  dataResource: PropTypes.any,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  rules: PropTypes.array,
};
FormCheckbox.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
};

export default FormCheckbox;
