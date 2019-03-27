import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I18n from 'i18next';
import { push } from 'connected-react-router';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import { findLast } from 'lodash';
import { Redirect } from 'react-router-dom';
import { history } from '../../redux/store';
import PrivateLayoutWrapper from './styles';
import { logout as logoutAction } from '../../redux/auth/actions';

const { Header, Sider, Content, Footer } = Layout;
const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'Dashboard',
    icon: 'dashboard',
    url: '/',
  },
  {
    key: 'clients',
    text: 'Clients',
    icon: 'user',
    url: '/clients',
  },
  {
    key: 'users',
    text: 'Users',
    icon: 'user',
    url: '/users',
  },
  {
    key: 'companies',
    text: 'Companies',
    icon: 'user',
    url: '/companies',
  },
  {
    key: 'settings',
    text: 'Settings',
    icon: 'setting',
    url: '/settings',
  },
];
const profileMenu = [
  {
    key: 'profile',
    text: 'Profile',
    url: '#',
  },
];

const mobileTabs = [
  {
    key: 'home',
    text: 'Profile',
    url: '/',
    icon: 'home',
  },
  {
    key: 'user',
    text: 'Profile',
    url: '#',
    icon: 'user',
  },
];

class PrivateLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      defaultSelectedKeys:
        findLast(sidebarMenu, menu => window.location.pathname.indexOf(menu.url) === 0) ||
        sidebarMenu[0],
    };
  }

  componentDidMount() {
    this.props.isAuthenticated && push('/login');
  }

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { children, logout, isAuthenticated } = this.props;
    if (!isAuthenticated) return <Redirect to="/login" />;
    return (
      <PrivateLayoutWrapper>
        <Layout className="windowView">
          <input
            onChange={() => {}}
            id="collapsedTracker"
            type="checkbox"
            checked={!this.state.collapsed}
          />
          <label htmlFor="collapsedTracker" className="overlay" onClick={this.toggle} />
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar">
            <div className="logo" />
            <Menu mode="inline" defaultSelectedKeys={[this.state.defaultSelectedKeys.key]}>
              {sidebarMenu.map(menu => (
                <Menu.Item key={menu.key} onClick={() => history.push(menu.url)}>
                  <Icon type={menu.icon} />
                  <span>{menu.text}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout className="mainView">
            <Header className="header">
              <div className="leftHeader">
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <div className="title">{I18n.t('appInfo.name')}</div>
              </div>
              <div className="rightHeader">
                <Dropdown
                  overlay={(
                    <Menu style={{ minWidth: '120px' }}>
                      {profileMenu.map(menu => (
                        <Menu.Item key={menu.key}>
                          <a href={menu.url}>{menu.text}</a>
                        </Menu.Item>
                      ))}
                      <Menu.Divider />
                      <Menu.Item onClick={logout} key="logout">
                        Logout
                      </Menu.Item>
                    </Menu>
)}
                  trigger={['click']}
                >
                  <Avatar size="large" icon="user" />
                </Dropdown>
              </div>
            </Header>
            <Content className="container">
              <div className="content">{children}</div>
              <Footer className="footer">{I18n.t('appInfo.footer')}</Footer>
              <Footer className="footerMobile">
                {mobileTabs.map(tab => (
                  <a href={tab.url} key={tab.key}>
                    <Icon type={tab.icon} className="tabIcon" />
                  </a>
                ))}
              </Footer>
            </Content>
          </Layout>
        </Layout>
      </PrivateLayoutWrapper>
    );
  }
}

PrivateLayout.propTypes = {
  children: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func,
};

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  {
    logout: logoutAction,
  }
)(PrivateLayout);
