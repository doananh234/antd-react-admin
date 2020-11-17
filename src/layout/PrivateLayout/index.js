import React, { useState } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Layout, Anchor } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import PrivateLayoutWrapper from './styles';
import Header from '../../containers/Header';
import SideBar from '../../containers/SideBar';

const { Content, Footer } = Layout;

const PrivateLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  // if (!hasPrivateLayoutWrapper) {
  //   return (
  //     <PrivateLayoutWrapper className="mainView mainWithoutSidebar">
  //       <Content className="container">
  //         <div className="content">{children}</div>
  //       </Content>
  //     </PrivateLayoutWrapper>
  //   );
  // }
  return (
    <PrivateLayoutWrapper collapsed={`${collapsed}`}>
      <input
        onChange={() => {}}
        id="collapsedTracker"
        type="checkbox"
        checked={!collapsed}
      />
      <label
        role="presentation"
        htmlFor="collapsedTracker"
        className="overlay"
        onClick={toggle}
      />
      <SideBar toggle={toggle} collapsed={collapsed} />
      <Layout>
        <Anchor>
          <Header onToggle={toggle} collapsed={collapsed} />
        </Anchor>
        <Content>
          <div className="content">{children}</div>
        </Content>
        <Footer
          className="footer"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>{I18n.t('appInfo.name')}</div>
          <div>
            <span>{I18n.t('appInfo.footer')}</span>
            <HeartFilled
              theme="filled"
              style={{ marginLeft: '5px', color: 'red' }}
            />
          </div>
        </Footer>
      </Layout>
    </PrivateLayoutWrapper>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.any,
  // title: PropTypes.string,
};

export default PrivateLayout;
