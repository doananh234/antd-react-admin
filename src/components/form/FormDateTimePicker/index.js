import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker, TimePicker, Form } from 'antd';
import FormItemUI from '../FormItem';
import { DateTimePickerWrapper } from './styles';

const FormDatePicker = (props) => {
  const {
    isShowTime,
    required,
    defaultValue,
    initialValue,
    formOptions,
    source,
    form,
    disabled,
    isShowDate,
    formatDate,
  } = props;
  const values =
    (defaultValue || initialValue) && !form.getFieldValue(source)
      ? moment(defaultValue || initialValue)
      : form.getFieldValue(source);
  const config = {
    rules: [{ type: 'object' }],
    initialValue:
      defaultValue || initialValue
        ? moment(defaultValue || initialValue)
        : undefined,
    ...formOptions,
  };
  const getValueFromEvent = (value) => {
    const e = value?.toISOString();
    props.formOptions &&
      props.formOptions.getValueFromEvent &&
      props.formOptions.getValueFromEvent(e);
    return e;
  };
  return (
    <DateTimePickerWrapper>
      <FormItemUI
        {...props}
        formOptions={{
          getValueFromEvent,
          normalize: (value) => value && moment(value),
        }}
        ruleType="object"
        defaultValue={
          defaultValue || initialValue
            ? moment(defaultValue || initialValue)
            : undefined
        }
        className="title"
        required={required}
        name={source}
      >
        <div>
          {isShowTime && (
            <TimePicker
              disabled={disabled}
              onChange={(newDate) => {
                form.setFieldsValue({
                  [source]: newDate,
                });
                formOptions.getValueFromEvent &&
                  formOptions.getValueFromEvent(newDate?.toISOString());
              }}
              style={{ marginBottom: 10 }}
              value={values}
              format="HH:mm"
              allowClear={false}
              className="viewTimePicker"
            />
          )}
          <Form.Item name={source} {...config}>
            <DatePicker
              allowClear={false}
              disabled={disabled}
              format={formatDate}
              className="viewDatePicker"
              style={{ display: isShowDate ? 'block' : 'none' }}
            />
          </Form.Item>
        </div>
      </FormItemUI>
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
  disabled: PropTypes.bool,
  isShowTime: PropTypes.bool,
  isShowDate: PropTypes.bool,
  formatDate: PropTypes.string,
};

FormDatePicker.defaultProps = {
  isShowTime: true,
  isShowDate: true,
  formOptions: {},
  formatDate: 'ddd - MMM DD YYYY',
};

export default FormDatePicker;
