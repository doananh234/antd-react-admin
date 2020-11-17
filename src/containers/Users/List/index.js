import React from 'react';
import { Avatar } from 'antd';
import ShowButton from 'components/RestActions/ShowButton';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const UsersList = () => {
  // eslint-disable-next-line no-unused-vars
  const formatRollUp = (data) => (
    <div className="w-58 h-20 r-2 bg-primary text-white text-center">
      Đi làm
    </div>
  );

  const formatStaffTitle = (data) => (
    <>
      <Avatar />
      <span className="text-primary t-14px-1.57 ml-8px">{data}</span>
    </>
  );
  return (
    <List resource="users">
      <RestFieldItem
        sorter
        hasSearch
        source="name"
        header="users.name"
        format={formatStaffTitle}
      />
      <RestFieldItem sorter hasSearch source="email" header="users.email" />
      <RestFieldItem
        source="phoneNumber"
        header="users.phone"
        hasSearch
        format={(data) => (
          <span className="text-primary t-14-1.57">{data}</span>
        )}
      />
      <RestFieldItem source="role" header="users.role" />
      <ActionGroup width={20} icon="ic-more">
        <ShowButton />
        <DeleteButton />
      </ActionGroup>
    </List>
  );
};

UsersList.propTypes = {};

export default UsersList;
