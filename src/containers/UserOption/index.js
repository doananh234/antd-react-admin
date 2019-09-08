import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import { getRecordData } from '../../utils/tools';
import RestFieldItem from '../../components/RestField/RestFieldItem';
import Reference from '../rest/Reference';

const AvatarField = props => {
  const { record, size, nameProp, avatarProp } = props;
  const name =
    record &&
    (getRecordData(record, nameProp) || record.fullName || record.email || record.phoneNumber);
  const avatar = record && (getRecordData(record, avatarProp) || record.avatar);
  return (
    <div className="avatar-item">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={avatar} icon="user" size={size} />
        <div style={{ marginLeft: 10 }}>
          {name}
          <Reference record={record} source="titleId" resource="titles">
            <RestFieldItem source="name" />
          </Reference>
        </div>
      </div>
    </div>
  );
};

AvatarField.propTypes = {
  record: PropTypes.object,
  size: PropTypes.number,
  nameProp: PropTypes.string,
  avatarProp: PropTypes.string,
};

AvatarField.defaultProps = {
  nameProp: 'fullName',
  avatarProp: 'avatar',
};

export default AvatarField;
