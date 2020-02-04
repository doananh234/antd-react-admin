import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { Select, Spin } from 'antd';
import { Waypoint } from 'react-waypoint';
import { map, isObject } from 'lodash';
import FormItem from '../FormItem';
import { getRecordData, onSearch as onChangeSearch } from '../../../utils/tools';
import { SelectWrapper } from './style';

const { Option } = Select;
class FormSelect extends Component {
  onSelectOption = (inputValue, option) => {
    if (
      onChangeSearch(
        isObject(option.props.children)
          ? getRecordData(
              option.props.children.props && option.props.children.props.record,
              this.props.searchKey,
            )
          : option.props.children,
        inputValue,
      )
    ) {
      return option.props.value;
    }
    return null;
  };

  render() {
    const {
      header,
      required,
      placeholder,
      defaultValue,
      disabled,
      resourceData,
      valueProp,
      titleProp,
      children,
      onSearch,
      onChange,
      format,
      className,
      loading,
      selectProps,
      formatText,
      onEnter,
    } = this.props;
    return (
      <FormItem
        ruleType={Array.isArray(defaultValue) ? 'array' : 'string'}
        {...this.props}
        placeholder={i18n.t(placeholder)}
        header={i18n.t(header)}
        required={required}
        defaultValue={defaultValue}
      >
        <SelectWrapper
          disabled={disabled}
          placeholder={i18n.t(placeholder)}
          filterOption={this.onSelectOption}
          showSearch
          allowClear
          className={className}
          onSearch={value => onSearch(value)}
          onChange={onChange}
          {...selectProps}
        >
          {map(format ? format(resourceData) : resourceData, data =>
            children ? (
              <Option
                key={valueProp ? getRecordData(data, valueProp) : data}
                value={valueProp ? getRecordData(data, valueProp) : data}
              >
                {React.cloneElement(children, {
                  key: valueProp ? getRecordData(data, valueProp) : data,
                  record: data,
                  valueProp,
                  titleProp,
                })}
              </Option>
            ) : (
              <Option
                key={valueProp ? getRecordData(data, valueProp) : data}
                value={valueProp ? getRecordData(data, valueProp) : data}
              >
                {formatText(titleProp ? getRecordData(data, titleProp) : data, data)}
              </Option>
            ),
          )}
          <Option key="loading" disabled value="loadingTracking">
            <Waypoint onEnter={onEnter} />
            {loading && (
              <div className="loading">
                <Spin />
              </div>
            )}
          </Option>
        </SelectWrapper>
      </FormItem>
    );
  }
}

FormSelect.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  resourceData: PropTypes.any,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  children: PropTypes.node,
  rules: PropTypes.array,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  format: PropTypes.func,
  searchKey: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  selectProps: PropTypes.object,
  formatText: PropTypes.func,
  record: PropTypes.object,
  onEnter: PropTypes.func,
};

FormSelect.defaultProps = {
  required: false,
  requiredMessage: 'This field is required',
  rules: [],
  placeholder: 'placeholder.undefined',
  onChange: () => {},
  onSearch: () => {},
  formatText: data => data,
  selectProps: {},
  valueProp: 'value',
  titleProp: 'text',
};

export default FormSelect;
