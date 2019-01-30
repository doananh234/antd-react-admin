import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I18n from 'i18next';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import { findLast } from 'lodash';
import { Redirect } from 'react-router-dom';
import { history } from '../../redux/store';
import PrivateLayoutWrapper from './styles';

const { Header, Sider, Content, Footer } = Layout;
const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'Dashboard',
    icon: 'dashboard',
    url: '/',
  },
  {
    key: 'users',
    text: 'Users',
    icon: 'user',
    url: '/users',
  },
  {
    key: 'rooms',
    text: 'Rooms',
    icon: 'snippets',
    url: '/rooms',
  },
];
const profileMenu = [
  {
    key: 'profile',
    text: 'Profile',
    url: '#',
  },
];

class PrivateLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      defaultSelectedKeys:
        findLast(sidebarMenu, menu => window.location.pathname.indexOf(menu.url) === 0) ||
        sidebarMenu[0],
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { children, isAuthenticated } = this.props;
    if (!isAuthenticated) return <Redirect to="/login" />;
    console.log('this.state.collapsed', this.state.collapsed);
    return (
      <PrivateLayoutWrapper>
        <Layout className="windowView">
          <input id="collapsedTracker" type="checkbox" checked={!this.state.collapsed} />
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
              <div>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </div>
              <div>
                <Dropdown
                  overlay={(
                    <Menu style={{ minWidth: '120px' }}>
                      {profileMenu.map(menu => (
                        <Menu.Item key={menu.key}>
                          <a href={menu.url}>{menu.text}</a>
                        </Menu.Item>
                      ))}
                      <Menu.Divider />
                      <Menu.Item key="logout">Logout</Menu.Item>
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
};

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
}))(PrivateLayout);
