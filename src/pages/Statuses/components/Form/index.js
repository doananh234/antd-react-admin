import React from 'react';
import { Switch } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const StatusesForm = props => (
  <div {...props}>
    <RestInputItem source="name" header="statuses.name" />
    <RestInputItem source="color" header="statuses.color" />
    <RestInputItem
      valuePropName="checked"
      ruleType="boolean"
      source="isActive"
      header="statuses.isActive"
    >
      <Switch />
    </RestInputItem>
  </div>
);

StatusesForm.propTypes = {};

export default StatusesForm;
