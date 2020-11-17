import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/actions';
// import { ROLE } from 'configs/localData';
import { checkRole } from 'utils/tools';
import { MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import Notifications from './Notifications';
import HeaderWrapper from './styles';

const Header = ({ onToggle, collapsed }) => {
  const dispatch = useDispatch();
  const currentRole = useSelector((state) => state.auth.role);
  const currentUser = useSelector((state) => state.auth.data);
  // const notSeen = useSelector((state) => state.notifications.notSeen);
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => {
    setVisible(!visible);
  };
  // const [locale, setLocale] = useState(
  //   localStorage.getItem('i18nextLng') || I18n.language,
  // );
  const profileMenu = [
    {
      key: 'profile',
      text: 'header.profile',
      url: '/profile',
    },
  ];

  // const changeLocale = e => () => {
  //   setLocale(e);
  //   I18n.changeLanguage(e);
  //   localStorage.setItem('i18nextLng', e);
  // };

  useEffect(() => {
    I18n.changeLanguage('en');
  }, []);

  return (
    <HeaderWrapper className="header">
      <div className="leftHeader">
        <MenuFoldOutlined
          className={`trigger ${collapsed ? '' : 'reverse-trigger'}`}
          onClick={onToggle}
        />
        <div className="title">{I18n.t('appInfo.name')}</div>
      </div>
      <div className="rightHeader">
        {/* <div
          className={`localeSelect${locale === 'vi' ? ' active' : ''}`}
          role="presentation"
          onClick={changeLocale('vi')}
        >
          VI
        </div>
        <div
          className={`localeSelect${locale === 'en' ? ' active' : ''}`}
          role="presentation"
          onClick={changeLocale('en')}
        >
          EN
        </div> */}
        {/* <div className="notification-section">
          <Button onClick={toggleDrawer}>
            <Badge count={notSeen}>
              <BellOutlined />
            </Badge>
          </Button>
        </div> */}
        <div className="user-role">
          <div className="name">
            {`${currentUser?.customer?.displayName || ''}`}
          </div>
          <div className="role">
            {currentUser?.email}
            {/* {I18n.t(ROLE.find((role) => role.value === currentRole)?.text)} */}
          </div>
        </div>
        <Dropdown
          overlay={() => (
            <Menu style={{ minWidth: '120px' }}>
              {profileMenu.map((menu) =>
                !checkRole(menu.roles, currentRole) ? null : (
                  <Menu.Item key={menu.key}>
                    <Link to={menu.url}>{I18n.t(menu.text)}</Link>
                  </Menu.Item>
                ),
              )}
              <Menu.Divider />
              <Menu.Item onClick={() => dispatch(logout())} key="logout">
                {I18n.t('header.logout')}
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}
        >
          <Avatar
            src={currentUser?.customer?.avatar}
            size="large"
            icon={<UserOutlined />}
          />
        </Dropdown>
        <Notifications
          closable={false}
          onClose={toggleDrawer}
          visible={visible}
        />
      </div>
    </HeaderWrapper>
  );
};
Header.propTypes = {
  collapsed: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Header;
