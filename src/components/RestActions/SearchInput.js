import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';
import I18n from 'i18next';

const SearchInput = ({ onTextSearch, defaultValue, placeholder }) => (
  <Input
    style={{ width: '180px' }}
    defaultValue={defaultValue}
    placeholder={I18n.t(placeholder)}
    prefix=<Icon style={{ color: '#41433f' }} type="search" size={14} />
    onPressEnter={e => onTextSearch(e.currentTarget.value)}
  />
);
SearchInput.propTypes = {
  onTextSearch: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchInput;
