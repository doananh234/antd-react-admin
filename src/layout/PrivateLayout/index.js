import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Layout, Icon } from 'antd';
import PrivateLayoutWrapper from './styles';
import Header from '../../containers/Header';
import SideBar from '../../containers/SideBar';
import HeaderWithoutSideBar from '../../containers/Header/HeaderWithoutSideBar';

const { Content, Footer } = Layout;

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
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { children, hasPrivateLayoutWrapper, title } = this.props;
    if (hasPrivateLayoutWrapper) {
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
            <SideBar collapsed={this.state.collapsed} />
            <Layout className="mainView">
              <Header onToggle={this.toggle} collapsed={this.state.collapsed} />
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

    return (
      <PrivateLayoutWrapper>
        <Layout className="mainView mainWithoutSidebar">
          <HeaderWithoutSideBar title={title} />
          <Content className="container">
            <div className="content">{children}</div>
          </Content>
        </Layout>
      </PrivateLayoutWrapper>
    );
  }
}

PrivateLayout.propTypes = {
  children: PropTypes.any,
  hasPrivateLayoutWrapper: PropTypes.bool,
  title: PropTypes.string,
};

export default PrivateLayout;
