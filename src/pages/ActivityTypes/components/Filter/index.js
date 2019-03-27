import React from 'react';
// import PropTypes from 'prop-types';
import { Switch } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="activityType" placeholder="activityType" />
    <RestInputItem source="note" placeholder="note" />
    <RestInputItem source="pushMessage" placeholder="pushMessage" />
    <RestInputItem
      valueProp="checked"
      source="isActive"
      component={<Switch />}
      placeholder="isActive"
    />
  </div>
);

Filter.propTypes = {};

export default Filter;
