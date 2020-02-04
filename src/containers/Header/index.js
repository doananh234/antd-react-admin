import React, { useState } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/slice';
import HeaderWrapper from './styles';

const Header = ({ onToggle, collapsed }) => {
  const dispatch = useDispatch();
  const [locale, setLocale] = useState(
    localStorage.getItem('i18nextLng') || I18n.language,
  );
  const profileMenu = [
    {
      key: 'profile',
      text: 'header.profile',
      url: '#',
    },
  ];

  const changeLocale = e => () => {
    setLocale(e);
    I18n.changeLanguage(e);
    localStorage.setItem('i18nextLng', e);
  };

  return (
    <HeaderWrapper className="header">
      <div className="leftHeader">
        <Icon
          className={`trigger ${collapsed ? '' : 'reverse-trigger'}`}
          type="ic-menu"
          onClick={onToggle}
        />
        <div className="title">{I18n.t('appInfo.name')}</div>
      </div>
      <div className="rightHeader">
        <div
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
        </div>
        <Dropdown
          overlay={() => (
            <Menu style={{ minWidth: '120px' }}>
              {profileMenu.map(menu => (
                <Menu.Item key={menu.key}>
                  <a href={menu.url}>{I18n.t(menu.text)}</a>
                </Menu.Item>
              ))}
              <Menu.Divider />
              <Menu.Item onClick={() => dispatch(logout())} key="logout">
                {I18n.t('header.logout')}
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}
        >
          <Avatar size="large" icon="user" />
        </Dropdown>
      </div>
    </HeaderWrapper>
  );
};
Header.propTypes = {
  collapsed: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Header;
