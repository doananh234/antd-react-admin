/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import I18n from 'i18next';
import { Menu, Dropdown, Avatar, PageHeader } from 'antd';
import { useHistory } from 'react-router';
import { UserOutlined } from '@ant-design/icons';
import { logout as logoutAction } from '../../redux/auth/actions';
import HeaderWrapper from './styles';

const HeaderWithoutSideBar = ({ title }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [locale, setLocale] = useState(
    localStorage.getItem('locale') || I18n.language,
  );
  const profileMenu = [
    {
      key: 'profile',
      text: 'header.profile',
      url: '#',
    },
  ];

  const changeLocale = (e) => () => {
    setLocale(e);
    I18n.changeLanguage(e);
    localStorage.setItem('locale', e);
  };

  useEffect(() => {
    I18n.changeLanguage(locale);
  }, []);

  return (
    <HeaderWrapper className="header withoutSidebar">
      <div className="leftHeader">
        <PageHeader onBack={() => history.goBack()} title={I18n.t(title)} />

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
          overlay=<Menu style={{ minWidth: '120px' }}>
            {profileMenu.map((menu) => (
              <Menu.Item key={menu.key}>
                <a href={menu.url}>{I18n.t(menu.text)}</a>
              </Menu.Item>
            ))}
            <Menu.Divider />
            <Menu.Item onClick={() => dispatch(logoutAction())} key="logout">
              {I18n.t('header.logout')}
            </Menu.Item>
          </Menu>
          trigger={['click']}
        >
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </HeaderWrapper>
  );
};
HeaderWithoutSideBar.propTypes = {
  title: PropTypes.string,
};

export default HeaderWithoutSideBar;
