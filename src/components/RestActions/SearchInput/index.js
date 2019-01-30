import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';
import I18n from 'i18next';
import { SearchInputWrapper } from './styles';

const SearchInput = ({ onTextSearch, defaultValue, placeholder }) => (
  <SearchInputWrapper>
    <Input
      defaultValue={defaultValue}
      placeholder={I18n.t(placeholder)}
      prefix={<Icon type="search" />}
      onPressEnter={e => onTextSearch(e.currentTarget.value)}
      className="input"
    />
  </SearchInputWrapper>
);
SearchInput.propTypes = {
  onTextSearch: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchInput;
