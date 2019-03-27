import React from 'react';
import { Switch } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const ActivityTypesForm = props => (
  <div {...props}>
    <RestInputItem source="activityType" header="activityTypes.activityType" />
    <RestInputItem source="note" header="activityTypes.note" />
    <RestInputItem source="pushMessage" header="activityTypes.pushMessage" />
    <RestInputItem
      valuePropName="checked"
      ruleType="boolean"
      source="isActive"
      header="activityTypes.isActive"
    >
      <Switch />
    </RestInputItem>
  </div>
);

ActivityTypesForm.propTypes = {};

export default ActivityTypesForm;
