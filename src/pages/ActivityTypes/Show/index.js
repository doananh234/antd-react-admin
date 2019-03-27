import React from 'react';
import { Switch } from 'antd';
import RestShow from '../../../containers/rest/Show';
import RestFieldItem from '../../../components/RestField/RestFieldItem';

const ActivityTypesShow = props => (
  <RestShow {...props} hasEdit resource="activityTypes">
    <RestFieldItem source="activityType" header="activityType" />
    <RestFieldItem source="note" header="note" />
    <RestFieldItem source="pushMessage" header="pushMessage" />
    <RestFieldItem valueProp="checked" source="isActive" component={<Switch />} header="isActive" />
  </RestShow>
);

export default ActivityTypesShow;
