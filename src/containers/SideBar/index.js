import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I18n from 'i18next';
import { Layout, Menu } from 'antd';
import { history } from '../../redux/store';
import Logo from '../../assets/images/logo.svg';
import FullLogo from '../../assets/images/fullLogo.svg';
import SVGIcon from '../../components/common/SVGIcon';

const getCurrentTab = str => {
  const paths = str && str.split('/');
  return paths && paths[1];
};

const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'sideBar.dashboard',
    icon: 'ic-home',
    url: '/',
  },
  {
    key: 'customers',
    text: 'sideBar.customers',
    icon: 'team',
    url: '/customers',
  },
  {
    key: 'users',
    text: 'sideBar.users',
    icon: 'user',
    url: '/users',
  },
  {
    key: 'settings',
    text: 'sideBar.settings',
    icon: 'ic-setting',
    url: '/settings/rooms',
  },
  {
    key: 'cms',
    text: 'sideBar.cms',
    icon: 'ic-user-checkin',
    url: '/cms-pages',
  },
];

const SideBar = ({ location, collapsed }) => {
  const url = getCurrentTab(location.pathname);
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
      <div className="logo">
        <img alt="" src={Logo} />
        <img alt="" src={FullLogo} className="fullLogo" />
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
            <SVGIcon type={menu.icon} />
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
