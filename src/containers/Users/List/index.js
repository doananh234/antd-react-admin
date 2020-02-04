import React from 'react';
import { Avatar } from 'antd';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const UsersList = () => {
  // eslint-disable-next-line no-unused-vars
  const formatRollUp = data => (
    <div className="w-58 h-20 r-2 bg-primary text-white text-center">
      Đi làm
    </div>
  );

  const formatStaffTitle = data => (
    <>
      <Avatar />
      <span className="text-primary t-14px-1.57 ml-8px">{data}</span>
    </>
  );
  return (
    <List
      resource="users"
      createHeader="Thêm giáo viên"
      placeholderSearch="Tìm giáo viên"
    >
      <RestFieldItem hasSearch source="id" header="MS" />
      <RestFieldItem
        sorter
        source="name"
        header="NHÂN VIÊN"
        format={formatStaffTitle}
      />
      <RestFieldItem sorter source="subject" header="PHỤ TRÁCH" />
      <RestFieldItem hasSearch source="userTypes" header="NHÓM" />
      <RestFieldItem sorter source="mainClassNames" header="CHỦ NHIỆM" />
      <RestFieldItem
        source="phoneNumber"
        header="DI ĐỘNG"
        hasSearch
        format={data => <span className="text-primary t-14-1.57">{data}</span>}
      />
      <RestFieldItem source="description" header="GHI CHÚ" width="30%" />
      <RestFieldItem
        source="phoneNumber"
        header="ĐIỂM DANH"
        format={formatRollUp}
      />
      <ActionGroup width={20} icon="ic-more">
        <EditButton />
        <DeleteButton />
      </ActionGroup>
    </List>
  );
};

UsersList.propTypes = {};

export default UsersList;
