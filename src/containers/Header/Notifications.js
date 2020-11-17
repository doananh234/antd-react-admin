import React from 'react';
import i18n from 'i18next';
import NotificationList from 'containers/Notifications/List';
import { DrawerStyles } from './styles';

const Notifications = props => {
  return (
    <DrawerStyles
      title={i18n.t('notifications.header')}
      width={370}
      placement="right"
      style={{ padding: 0 }}
      {...props}
    >
      <NotificationList {...props} />
    </DrawerStyles>
  );
};

export default Notifications;
