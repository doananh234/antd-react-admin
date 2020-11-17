import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import I18n from 'i18next';
import { FormItemWrapper } from '../FormItem/styles';

const renderOption = (titleProp) => (item) => (
  <AutoComplete.Option key={item[titleProp]}>
    {item[titleProp]}
  </AutoComplete.Option>
);
class FormAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect = (inputValue, option) => {
    const { onSelect } = this.props;

    onSelect && onSelect(inputValue, option);
  };

  onChange = (text) => {
    const {
      form,
      resourceData,
      newDataSource,
      source,
      titleProp,
      onChange,
      valueProp,
    } = this.props;
    const option = resourceData.find((e) => e[titleProp] === text);
    if (option) {
      form.setFieldsValue({
        [source]: option[valueProp],
        [newDataSource]: undefined,
      });
      onChange(option[valueProp]);
    } else {
      form.setFieldsValue({
        [newDataSource]: text,
        [source]: undefined,
      });
      onChange(text);
    }
  };

  render() {
    const {
      placeholder,
      disabled,
      resourceData,
      onSearch,
      className,
      valueProp,
      titleProp,
      label,
      header,
      defaultValue,
      newDataSource,
    } = this.props;
    return (
      <FormItemWrapper
        name={newDataSource}
        className={className}
        label={I18n.t(label || header)}
      >
        <AutoComplete
          dataSource={
            resourceData
              ? resourceData.map(renderOption(titleProp, valueProp))
              : []
          }
          defaultValue={
            this.state.value ||
            resourceData?.find((e) => e[valueProp] === defaultValue)?.[
              titleProp
            ] ||
            defaultValue
          }
          disabled={disabled}
          placeholder={placeholder}
          className={className}
          onSearch={(value) => onSearch(value)}
          onSelect={this.onSelect}
          onChange={this.onChange}
        />
      </FormItemWrapper>
    );
  }
}

FormAutoComplete.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  resourceData: PropTypes.any,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  onSearch: PropTypes.func,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  header: PropTypes.string,
  label: PropTypes.string,
  source: PropTypes.string,
  defaultValue: PropTypes.string,
  newDataSource: PropTypes.string,
};

FormAutoComplete.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onSearch: () => {},
};

export default FormAutoComplete;
