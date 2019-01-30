import styled from 'styled-components';

const PrivateLayoutWrapper = styled.div`
  .windowView {
    height: 100vh;
  }
  .mainView {
    height: 100vh;
    margin-left: 80px;
    overflow: hidden;
    transition: all 0.2s ease 0s;
    background: #f4f6fc;
  }
  .container {
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
  .content {
    padding: 40px 20px;
    flex: 1;
  }
  .trigger {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(0, 0, 0, 0.2);
    margin: 16px;
  }

  .sidebar {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    left: 0;
    background: #fff;
    border-right: 1px solid #e8e8e8;

    .ant-menu {
      border-right: 1px solid #fff;
    }
  }

  .header {
    position: 'fixed';
    z-index: 1;
    background: #fff;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;

    & .ant-avatar-lg.ant-avatar-icon {
      .anticon {
        font-size: 24px;
      }
    }
  }

  .mainContent {
    padding: 20px;
    background: #fff;
    min-height: 280;
  }

  .footer {
    text-align: center;
  }
  #collapsedTracker {
    width: 0px;
    height: 0px;
    position: absolute;
  }
  #collapsedTracker:checked ~ .sidebar {
  }

  #collapsedTracker:checked ~ .mainView {
    margin-left: 200px !important;
  }
  @media only screen and (max-width: 430px) {
    .sidebar {
      left: -80px;
    }
    .mainView {
      margin-left: 0px;
    }
    #collapsedTracker:checked ~ .sidebar {
      left: 0px;
    }

    #collapsedTracker:checked ~ .mainView {
      margin-left: 200px !important;
    }
  }
`;

export default PrivateLayoutWrapper;
