import React, { useState } from 'react';
import { debounce, get } from 'lodash';
import PropTypes from 'prop-types';
import { Input, Checkbox, Button } from 'antd';
import i18next from 'i18next';
import { FilterDropdownWrapper } from './styles';

const FilterDropdown = ({
  clearFilters,
  onSearch,
  defaultChecked,
  valueProp,
  titleProp,
  setSelectedKeys,
  confirm,
  resourceData,
}) => {
  const [checkedList, setCheckedList] = useState(defaultChecked);
  const onChange = checkedList => {
    setCheckedList(checkedList);
    setSelectedKeys(checkedList);
  };

  const onSearchOption = e => {
    onSearch(e);
  };

  const onFilter = () => {
    confirm();
  };

  const onClear = () => {
    setCheckedList([]);
    clearFilters();
  };

  const onSearchDebounce = debounce(onSearchOption, 300);

  return (
    <FilterDropdownWrapper>
      <Input.Search
        placeholder={i18next.t('placeholder.search')}
        onChange={e => onSearchDebounce(e.target.value)}
      />
      <div className="filterContent">
        <Checkbox.Group value={checkedList} onChange={onChange}>
          {resourceData.map(e => (
            <Checkbox key={get(e, valueProp)} value={get(e, valueProp)}>
              {get(e, titleProp)}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
      <div className="footer">
        <Button onClick={onFilter} type="primary">
          {i18next.t('button.search')}
        </Button>
        <Button onClick={onClear}>{i18next.t('button.clear')}</Button>
      </div>
    </FilterDropdownWrapper>
  );
};

FilterDropdown.propTypes = {
  resourceData: PropTypes.array,
  clearFilters: PropTypes.func,
  onSearch: PropTypes.func,
  defaultChecked: PropTypes.array,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  setSelectedKeys: PropTypes.array,
  confirm: PropTypes.func,
};

export default FilterDropdown;
