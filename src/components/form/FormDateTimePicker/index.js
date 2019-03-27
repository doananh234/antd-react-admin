import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker, TimePicker } from 'antd';
import FormItem from '../FormItem';
import { DateTimePickerWrapper } from './styles';

const FormDatePicker = props => {
  const {
    source,
    header,
    required,
    requiredMessage,
    form,
    defaultValue,
    initialValue,
    formOptions,
  } = props;
  const config = {
    rules: [{ type: 'object', required, message: requiredMessage }],
    initialValue: moment(defaultValue || initialValue),
    ...formOptions,
  };
  const value = form.getFieldValue(source) || moment(defaultValue || initialValue);
  return (
    <DateTimePickerWrapper>
      <FormItem {...props} className="title" header={header} required={required}>
        <TimePicker
          onChange={newDate => {
            form.setFieldsValue({
              [source]: newDate,
            });
            formOptions.getValueFromEvent && formOptions.getValueFromEvent();
          }}
          value={value}
          format="HH:mm"
          className="viewTimePicker"
        />
        {form.getFieldDecorator(source, config)(
          <DatePicker format="ddd - MMM DD YYYY" className="viewDatePicker" />
        )}
      </FormItem>
    </DateTimePickerWrapper>
  );
};

FormDatePicker.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  initialValue: PropTypes.object,
  formOptions: PropTypes.object,
};

FormDatePicker.defaultProps = {
  formOptions: {},
};

export default FormDatePicker;
