import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Icon } from 'antd';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { getRecordData } from '../../../utils/tools';
import { MEMBER_ROLES } from '../../../configs/localData/index';

const UserInfo = props => {
  const { record, isShowName, size, isLink, prefixLink, nameProp, roleProp, avatarProp } = props;
  const content =
    record &&
    (isLink ? (
      <Link to={`${prefixLink}/${record.id}/edit`} style={{ marginLeft: 10 }}>
        {getRecordData(record, nameProp) || record.email}
        {record.gender ? (
          <Icon
            style={{
              marginLeft: 5,
              fontSize: 17,
              color: record.gender === 'Male' ? '#00a7f7' : '#9b28b0',
            }}
            type={`${record.gender.toLowerCase()}`}
          />
        ) : (
          ''
        )}
        <div style={{ lineHeight: '12px' }}>
          <small style={{ color: '#8d8a8a' }}>{getUserRole(getRecordData(record, roleProp))}</small>
        </div>
      </Link>
    ) : (
      // eslint-disable-next-line
      <a role="main" style={{ marginLeft: 10 }}>
        {getRecordData(record, nameProp) || record.email}
        <div style={{ lineHeight: '12px' }}>
          <small style={{ color: '#8d8a8a' }}>{getUserRole(getRecordData(record, roleProp))}</small>
        </div>
      </a>
    ));
  return (
    <div className="avatar-item">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {(record && record.avatar && (
          <Avatar src={getRecordData(record, avatarProp)} size={size} />
        )) || <Avatar icon="user" size={size} />}
        {(record && isShowName && content) || (
          <span style={{ marginLeft: 10 }}>{i18next.t('error.waitingUpdate')}</span>
        )}
      </div>
    </div>
  );
};

const getUserRole = id => {
  const role = MEMBER_ROLES.find(data => data.id === id);
  return role ? role.text[i18next.language] : id;
};

UserInfo.propTypes = {
  record: PropTypes.object,
  isShowName: PropTypes.bool,
  size: PropTypes.number,
  isLink: PropTypes.bool,
  nameProp: PropTypes.string,
  roleProp: PropTypes.string,
  avatarProp: PropTypes.string,
  prefixLink: PropTypes.string,
};

UserInfo.defaultProps = {
  nameProp: 'fullName',
  roleProp: 'businessRole',
  avatarProp: 'avatar',
  isShowName: true,
  isLink: true,
  prefixLink: 'users',
};

export default UserInfo;
