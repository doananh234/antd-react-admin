import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import PublicLayoutWrapper from './styles';

const PublicLayout = ({ children }) => (
  <PublicLayoutWrapper>
    <Layout className="layout">
      <div className="layout-content">
        <div className="main-content">{children}</div>
        <div className="main-img" />
      </div>
    </Layout>
  </PublicLayoutWrapper>
);

PublicLayout.propTypes = {
  children: PropTypes.any,
};

export default PublicLayout;
