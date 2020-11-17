import styled from 'styled-components';
import { Layout } from 'antd';

const PrivateLayoutWrapper = styled(Layout)`
  min-height: 100vh;
  .ant-layout {
    transition: all 0.2s ease 0s;
    padding-left: ${({ collapsed }) =>
      collapsed === 'true' ? '64px' : '200px'};

    @media only screen and (max-width: 640px) {
      padding-left: 0px;
    }
  }
  .ant-anchor-wrapper {
    margin-left: 0px;
    padding-left: 0px;
  }
  .container {
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  .content {
    padding: 36px 24px;
    flex: 1;
    ${'' /* @media only screen and (max-width: 640px) {
      padding-top: 80px;
    } */}
  }
  .trigger {
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    transition: color 0.2s;
    margin-right: 10px;
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    @media only screen and (max-width: 640px) {
      color: ${({ theme }) => theme.palette.primary};
    }
  }

  .triggerMobile {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary};
    transition: color 0.2s;
    position: fixed;
    top: 0px;
    left: 20px;
    z-index: 2;
    display: none;
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    @media only screen and (max-width: 640px) {
      display: block;
    }
  }

  .logo {
    height: 64px;
    display: flex;
    align-items: center;
    position: relative;
    align-items: center;
    justify-content: center;
    img {
      height: 40px;
      width: auto;
      object-fit: contain;
    }
    .fullLogo {
      position: absolute;
      opacity: 0;
      transition: all 0.2s;
    }
  }
  .sider-wrapper {
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 999;
    background: ${({ theme }) => theme.background.content};

    .ant-menu {
      background: ${({ theme }) => theme.palette.primary};
      border-right: none;
    }
    .ant-menu-item {
      color: ${({ theme }) => theme.background.gray};
      display: flex;
      align-items: center;
      height: 56px;
      &.ant-menu-item-selected {
        background: ${({ theme }) => theme.palette.primary};
        color: ${({ theme }) => theme.background.content};
        border-right: 2px solid ${({ theme }) => theme.border.light};
        .anticon {
          color: ${({ theme }) => theme.background.content};
          line-height: 0;
        }
      }
      .anticon {
        font-size: 24px;
        width: 64px;
        left: 0px;
        position: absolute;
        line-height: 0;
      }
    }
  }

  .sidebar {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    ${'' /* background: ${({ theme }) => theme.background.content}; */}
    border-right: 1px solid ${({ theme }) => theme.border.default};

    .ant-menu {
      border-right: 1px solid ${({ theme }) => theme.border.default};
    }
    .ant-menu-item {
      color: ${({ theme }) => theme.text.secondary};
      display: flex;
      align-items: center;
      height: 56px;
      svg {
        fill: ${({ theme }) => theme.text.secondary};
      }
      & .menu-label {
        margin-top: 0;
        padding-left: 40px;
      }
      &.ant-menu-item-selected {
        background: ${({ theme }) => theme.background.content};
        color: ${({ theme }) => theme.palette.primary};
        ${'' /* border-right: 2px solid ${({ theme }) => theme.border.primary}; */}
        & > span {
          color: ${({ theme }) => theme.palette.primary};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
        svg {
          fill: ${({ theme }) => theme.palette.primary};
        }
        .anticon {
          color: ${({ theme }) => theme.palette.primary};
        }
      }
      .anticon {
        font-size: 24px;
        width: 64px;
        left: 0px;
        position: absolute;
      }
    }
  }

  .header {
    position: 'fixed';
    z-index: 1;
    background: ${({ theme }) => theme.background.content};
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease 0.2s;
    @media only screen and (max-width: 640px) {
    }

    .title {
      display: none;
      opacity: 0;
      transition: opacity 0.2s;
      text-align: center;
      @media only screen and (max-width: 640px) {
        opacity: 1;
        display: inline-block;
        padding-left: 20px;
        font-size: 16px;
        font-weight: 500;
      }
    }

    & .ant-avatar-lg.ant-avatar-icon {
      .anticon {
        font-size: 24px;
      }
    }
    ${'' /* @media only screen and (max-width: 640px) {
      margin-top: -80px;
    } */}
  }

  .mainContent {
    padding: 20px;
    background: #fff;
    min-height: 280;
  }

  .footer {
    text-align: center;
    @media only screen and (max-width: 640px) {
      display: none;
    }
  }
  #collapsedTracker {
    width: 0px;
    height: 0px;
    position: absolute;
  }
  .sidebar {
    ${'' /* background: ${({ theme }) => theme.background.content}; */}
    border-right: 1px solid ${({ theme }) => theme.background.content};
    .ant-menu {
      ${'' /* background: ${({ theme }) => theme.background.content}; */}
      border-right: 0px solid ${({ theme }) => theme.background.content};
    }
  }

  #collapsedTracker:checked ~ .sidebar,
  #collapsedTracker:checked ~ .sider-wrapper {
    .logo {
      .fullLogo {
        opacity: 1;
      }
    }
  }

  #collapsedTracker:checked ~ .mainView {
    margin-left: 200px !important;
  }
  @media only screen and (max-width: 640px) {
    .sider-wrapper-true {
      aside {
        display: none;
      }
    }

    .sidebar {
      ${'' /* left: -80px; */}
      position: fixed;
      z-index: 999;
      height: 100vh;
    }
    .mainView {
      margin-left: 0px;
      z-index: 1;
    }
    .overlay {
      z-index: 998;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.5s ease 0s;
    }
    #collapsedTracker:checked ~ .sidebar {
      left: 0px;
    }

    #collapsedTracker:checked ~ .mainView {
      margin-left: 0px !important;
      z-index: 1;
    }
    #collapsedTracker:checked ~ .overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .footer {
    background: ${({ theme }) => theme.background.content};
    color: ${({ theme }) => theme.text.primary};
  }
  .footerMobile {
    position: fixed;
    height: 60px;
    left: 0px;
    right: 0px;
    bottom: -60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.background.content};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease 0.2s;
    a {
      text-align: center;
      flex: 1;
    }
    .tabIcon {
      font-size: 25px;
    }
    @media only screen and (max-width: 640px) {
      bottom: 0px;
    }
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }

  .ant-table-tbody {
    background: ${({ theme }) => theme.background.content};
  }

  &.mainWithoutSidebar {
    margin-left: 0px;
    .content {
      padding: 0px;
    }
    .ant-layout {
      padding-left: 0px;
    }
  }
`;

export default PrivateLayoutWrapper;
