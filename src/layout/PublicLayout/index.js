import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import PublicLayoutWrapper from './styles';

const { Content } = Layout;

const PublicLayout = ({ children }) => (
  <PublicLayoutWrapper>
    <Layout className="layout">
      <Content className="main-img" />
      <div className="main-content">{children}</div>
    </Layout>
  </PublicLayoutWrapper>
);

PublicLayout.propTypes = {
  children: PropTypes.any,
};

export default PublicLayout;
