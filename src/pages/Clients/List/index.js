import React from 'react';
import { Switch, Avatar } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import List from '../../../containers/rest/List';
import Reference from '../../../containers/rest/Reference';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import { GENDER, STATUS, FORMAT_DATE } from '../../../configs/localData';
import { dateFilterDropdown } from '../../../components/RestInput/RestDateTimePicker';

const ClientsList = props => (
  <List {...props} onEditHeaderSuccess={onEditHeaderSuccess} resource="clients">
    <RestFieldItem source="avatar" header="clients.avatar" valueProp="src" component={<Avatar />} />
    <RestFieldItem
      filterDropdown={dateFilterDropdown}
      source="createdAt"
      format={data => moment(data).format(FORMAT_DATE)}
      header="clients.createdAt"
    />
    <RestFieldItem source="fullName" hasSearch isEditHeader header="clients.fullName" />
    <RestFieldItem source="firstName" hasSearch isEditHeader header="clients.firstName" />
    <RestFieldItem source="lastName" hasSearch header="clients.lastName" />
    <RestFieldItem source="email" hasSearch header="clients.email" />
    <RestFieldItem
      source="gender"
      filters={GENDER.map(item => ({ ...item, text: i18next.t(item.text) }))}
      header="clients.gender"
    />
    <RestFieldItem source="phoneNumber" hasSearch header="clients.phoneNumber" />
    <RestFieldItem source="address" hasSearch header="clients.address" />
    <Reference source="companyId" header="clients.company" resource="companies">
      <RestFieldItem source="name" />
    </Reference>
    <RestFieldItem
      valueProp="checked"
      filters={STATUS.map(item => ({ ...item, text: i18next.t(item.text) }))}
      component={<Switch />}
      source="isActive"
      header="clients.isActive"
    />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

const onEditHeaderSuccess = () => {
  // console.log('e', e);
};

ClientsList.propTypes = {};

export default ClientsList;
