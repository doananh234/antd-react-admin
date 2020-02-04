import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I18n from 'i18next';
import { Layout, Menu, Icon } from 'antd';
import { history } from '../../redux/store';
import Logo from '../../assets/images/logo.png';
// import FullLogo from '../../assets/images/logo.png';

const getCurrentTab = str => {
  const paths = str && str.split('/');
  return paths && paths[1];
};

const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'sideBar.dashboard',
    icon: 'ic-dashboard',
    url: '/',
  },
  {
    key: 'teachers',
    text: 'sideBar.teachers',
    icon: 'ic-student',
    url: '/teachers',
  },
  {
    key: 'staff',
    text: 'sideBar.users',
    icon: 'ic-teacher',
    url: '/staff',
  },
  {
    key: 'attendances',
    text: 'sideBar.attendances',
    icon: 'ic-attendance',
    url: '/attendances',
  },
  {
    key: 'finances',
    text: 'sideBar.finances',
    icon: 'ic-finance',
    url: '/finances',
  },
  {
    key: 'notifications',
    text: 'sideBar.notifications',
    icon: 'ic-notification',
    url: '/notifications',
  },
  {
    key: 'settings',
    text: 'sideBar.settings',
    icon: 'ic-config',
    url: '/settings/classes',
  },
];

const SideBar = ({ location, collapsed }) => {
  const url = getCurrentTab(location.pathname);
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sidebar"
      collapsedWidth={64}
    >
      <div className="logo">
        <img alt="" src={Logo} />
        <img alt="" src={Logo} className="fullLogo" />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[url || 'dashboard']}
        defaultSelectedKeys={[url || 'dashboard']}
      >
        {sidebarMenu.map(menu => (
          <Menu.Item
            key={menu.key}
            title={I18n.t(menu.text)}
            onClick={() => history.push(menu.url)}
          >
            <Icon type={menu.icon} />
            {!collapsed && <span>{I18n.t(menu.text)}</span>}
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

SideBar.propTypes = {
  location: PropTypes.object,
  collapsed: PropTypes.bool,
};

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
  location: state.router.location,
}))(SideBar);
