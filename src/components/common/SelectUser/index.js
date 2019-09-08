import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import i18next from 'i18next';

const { Option } = Select;

const SelectUser = ({ disabled, resourceData, onChange }) => (
  <Select
    disabled={disabled}
    mode="multiple"
    onChange={onChange}
    placeholder={i18next.t('placeholder.undefined')}
  >
    {resourceData.map(data => (
      <Option key={data.id} value={data.id}>
        {data.displayName}
      </Option>
    ))}
  </Select>
);
SelectUser.propTypes = {
  resourceData: PropTypes.array,
  disabled: PropTypes.func,
  onChange: PropTypes.func,
};

export default SelectUser;
