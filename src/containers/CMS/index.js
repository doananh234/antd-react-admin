import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import CMSWrapper from './styles';

const { Sider, Content } = Layout;

const CMS = () => {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <CMSWrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            role="presentation"
            onClick={() => setcollapsed(!collapsed)}
            className="txtToolTitle"
          >
            <div className="txtTitle">Tools</div>
            <Icon type={collapsed ? 'arrow-right' : 'close'} />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              marginLeft: 16,
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </CMSWrapper>
  );
};
CMS.propTypes = {};

export default CMS;
