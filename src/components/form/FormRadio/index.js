import React from 'react';
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
    form,
    defaultValue,
    type,
    dataResource,
    valuePops,
    titleProps,
    rules,
  } = props;
  return (
    <FormItem label={header}>
      {form.getFieldDecorator(source, {
        rules: [{ required, message: requiredMessage, ...rules }],
        initialValue: defaultValue,
      })(
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
            )
          )}
        </RadioGroup>
      )}
    </FormItem>
  );
};

FormRadio.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  dataResource: PropTypes.any,
  type: PropTypes.string,
  rules: PropTypes.array,
  valuePops: PropTypes.string,
  titleProps: PropTypes.string,
};

FormRadio.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
};
export default FormRadio;
