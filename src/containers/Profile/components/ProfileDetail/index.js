import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';
import i18n from 'i18next';
import Icon, { UserOutlined } from '@ant-design/icons';
import { ROLE, GENDERS } from 'configs/localData';

import ProfileDetailStyles from './styles';
import ChangePassword from '../ChangePassword';

const ProfileDetail = ({ isProfile, record, handleClick, currentRole }) => {
  return (
    <ProfileDetailStyles>
      <div className="profile-info">
        <div className="avatar-section">
          <Avatar
            src={record?.customer?.avatar}
            icon={<UserOutlined />}
            size={150}
          />
          <div className="account-info">
            <div className="username">{record?.customer?.displayName}</div>
            {isProfile && (
              <div className="role">
                {i18n.t(ROLE.find((role) => currentRole === role.value)?.text)}
              </div>
            )}
          </div>
        </div>
        <div className="info-section">
          <div className="profile-info-title">
            {i18n.t('profile.profileInfo')}
          </div>
          <div className="name-section">
            {`${record?.firstName || ''} ${record?.lastName || ''}`}
            {record?.gender && (
              <Icon
                type={
                  GENDERS.find((gender) => gender.value === record?.gender)
                    ?.icon
                }
                style={{
                  marginLeft: '10px',
                  color: GENDERS.find(
                    (gender) => gender.value === record?.gender,
                  )?.color,
                }}
              />
            )}
          </div>
          <div className="email-section">
            {`${i18n.t('profile.email')}: ${
              record?.customer?.email || record?.email
            }`}
          </div>
          <div className="phone-section">
            {`${i18n.t('profile.phone')}: ${
              record?.customer?.phoneNumber || i18n.t('error.waitingUpdate')
            }`}
          </div>
          <div className="phone-section">
            {`${i18n.t('profile.address')}: ${
              record?.customer?.address || i18n.t('error.waitingUpdate')
            }`}
          </div>
          <div className="phone-section">
            {`${i18n.t('profile.national')}: ${
              record?.customer?.national || i18n.t('error.waitingUpdate')
            }`}
          </div>
        </div>
      </div>
      <div>
        <br />
        <div
          className="html-content"
          dangerouslySetInnerHTML={{ __html: record?.customer?.note }}
        />
      </div>
      {isProfile && (
        <div className="action-section">
          <ChangePassword />
          <Button type="primary" onClick={handleClick}>
            {i18n.t('button.editProfile')}
          </Button>
        </div>
      )}
    </ProfileDetailStyles>
  );
};

ProfileDetail.propTypes = {
  record: PropTypes.object,
  isProfile: PropTypes.bool,
  handleClick: PropTypes.func,
  currentRole: PropTypes.string,
};

ProfileDetail.defaultProps = {
  isProfile: false,
  handleClick: () => {},
};

export default ProfileDetail;
