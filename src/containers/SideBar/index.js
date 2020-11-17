import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import I18n from 'i18next';
import { Layout, Menu } from 'antd';
import { checkRole } from 'utils/tools';
import { useHistory, useLocation } from 'react-router';
import {
  DashboardOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import fullLogo from 'assets/images/fullLogo.png';
import smallLogo from 'assets/images/smallLogo.png';

const getCurrentTab = (str, key) => {
  const paths = str && str.split('/');
  return paths && paths[key];
};

const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'sideBar.dashboard',
    Icon: DashboardOutlined,
    url: '/',
  },
  {
    key: 'users',
    text: 'sideBar.users',
    Icon: UserOutlined,
    url: '/users',
  },
  {
    key: 'settings',
    text: 'sideBar.settings',
    Icon: SettingOutlined,
    url: '/settings/categories',
  },
];

const SideBar = ({ collapsed }) => {
  const role = useSelector((state) => state.auth.role);
  const location = useLocation();
  const history = useHistory();
  const url = getCurrentTab(location.pathname, 1);

  return (
    <div className={`sider-wrapper sider-wrapper-${collapsed}`}>
      <Layout.Sider
        trigger={null}
        collapsible
        theme="dark"
        collapsed={collapsed}
        className="sidebar"
        collapsedWidth={64}
      >
        <div className="logo">
          {collapsed && <img alt="" src={smallLogo} />}
          <img alt="" src={fullLogo} className="fullLogo" />
        </div>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[url || 'dashboard']}
          defaultSelectedKeys={[url || 'dashboard']}
        >
          {sidebarMenu.map((menu) => {
            if (!checkRole(menu.roles, role)) {
              return null;
            }
            return (
              <Menu.Item
                key={menu.key}
                title={I18n.t(menu.text)}
                onClick={() => history.push(menu.url)}
                icon={<menu.Icon />}
              >
                {!collapsed && (
                  <span className="menu-label">{I18n.t(menu.text)}</span>
                )}
              </Menu.Item>
            );
          })}
        </Menu>
      </Layout.Sider>
    </div>
  );
};

SideBar.propTypes = {
  collapsed: PropTypes.bool,
};

export default SideBar;
