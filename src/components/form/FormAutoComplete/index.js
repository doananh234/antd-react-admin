import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import FormItem from '../FormItem';

const renderOption = (titleProp, valueProp) => item => (
  <AutoComplete.Option key={item[valueProp]}>{item[titleProp]}</AutoComplete.Option>
);
class FormAutoComplete extends Component {
  onSelect = (inputValue, option) => {
    const { onSelect } = this.props;
    onSelect(inputValue, option);
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
      onChange,
    } = this.props;
    return (
      <FormItem {...this.props}>
        <AutoComplete
          dataSource={resourceData ? resourceData.map(renderOption(titleProp, valueProp)) : []}
          disabled={disabled}
          placeholder={placeholder}
          className={className}
          onSearch={value => onSearch(value)}
          onSelect={this.onSelect}
          onChange={onChange}
        />
      </FormItem>
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
};

FormAutoComplete.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onSearch: () => {},
};

export default FormAutoComplete;
