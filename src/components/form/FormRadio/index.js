import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { Form, Radio } from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormRadio = props => {
  const {
    source,
    header,
    required,
    requiredMessage,
    placeholder,
    defaultValue,
    type,
    dataResource,
    valuePops,
    titleProps,
    rules,
  } = props;
  return (
    <FormItem
      label={header}
      name={source}
      rules={[{ required, message: i18next.t(requiredMessage), ...rules }]}
      initialValue={defaultValue}
    >
      <RadioGroup placeholder={placeholder}>
        {dataResource.map(data =>
          type === 'button' ? (
            <RadioButton key={data[valuePops]} value={data[valuePops]}>
              {data[titleProps]}
            </RadioButton>
          ) : (
            <Radio key={data[valuePops]} value={data[valuePops]}>
              {data[titleProps]}
            </Radio>
          ),
        )}
      </RadioGroup>
    </FormItem>
  );
};

FormRadio.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.any,
  dataResource: PropTypes.any,
  type: PropTypes.string,
  rules: PropTypes.array,
  valuePops: PropTypes.string,
  titleProps: PropTypes.string,
};

FormRadio.defaultProps = {
  required: false,
  requiredMessage: 'error.required',
  rules: [],
};
export default FormRadio;
