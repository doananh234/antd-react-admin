import styled from 'styled-components';

const PrivateLayoutWrapper = styled.div`
  .windowView {
    height: 100vh;
  }
  .mainView {
    height: 100vh;
    margin-left: 80px;
    overflow: hidden;
    transition: all 0.3s ease 0s;
    background: ${({ theme }) => theme.background.container};
  }
  .mainWithoutSidebar {
    margin-left: 0px;
    .content {
      padding:0px;
    }
    .ant-layout {
      height: 100%;
    }
  }
  .container {
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
  .content {
    padding: 34px 20px;
    flex: 1;
    ${'' /* @media only screen and (max-width: 430px) {
      padding-top: 80px;
    } */}
  }
  .trigger {
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    transition: color 0.3s;
    margin-right: 10px;
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    @media only screen and (max-width: 430px) {
      color: ${({ theme }) => theme.palette.primary};
    }
  }

  .triggerMobile {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary};
    transition: color 0.3s;
    position: fixed;
    top: 0px;
    left: 20px;
    z-index: 2;
    display: none;
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    @media only screen and (max-width: 430px) {
      display: block;
    }
  }

  .logo {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    position: relative;
    img {
      height: 40px;
      width: auto;
      object-fit: contain;
    }
    .fullLogo {
      position: absolute;
      opacity: 0;
      transition: all 0.3s;
    }
  }

  .sidebar {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    left: 0;
    background: ${({ theme }) => theme.background.content};
    border-right: 1px solid ${({ theme }) => theme.border.default};

    .ant-menu {
      border-right: 1px solid ${({ theme }) => theme.border.default};
    }
    .ant-menu-item {
      color: ${({ theme }) => theme.text.secondary};
      &.ant-menu-item-selected {
        color: ${({ theme }) => theme.text.highlight};
        & > span {
          color: ${({ theme }) => theme.text.highlight};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
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
    @media only screen and (max-width: 430px) {
      display: inherit;
    }

    .title {
      display: none;
      opacity: 0;
      transition: opacity 0.3s;
      text-align: center;
      @media only screen and (max-width: 430px) {
        opacity: 1;
        display: inline-block;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 500;
        width: 100%;
      }
    }

    & .ant-avatar-lg.ant-avatar-icon {
      .anticon {
        font-size: 24px;
      }
    }
    ${'' /* @media only screen and (max-width: 430px) {
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
    @media only screen and (max-width: 430px) {
      display: none;
    }
  }
  #collapsedTracker {
    width: 0px;
    height: 0px;
    position: absolute;
  }
  .sidebar {
    background: ${({ theme }) => theme.background.content};
    border-right: 1px solid ${({ theme }) => theme.background.content};
    .ant-menu {
      background: ${({ theme }) => theme.background.content};
      border-right:1px solid ${({ theme }) => theme.background.content};
    }
  }

  #collapsedTracker:checked ~ .sidebar {
    .logo {
      .fullLogo {
        opacity: 1;
      }
    }
  }

  #collapsedTracker:checked ~ .mainView {
    margin-left: 200px !important;
  }
  @media only screen and (max-width: 430px) {
    .sidebar {
      left: -80px;
      position: fixed;
      z-index: 9999;
    }
    .mainView {
      margin-left: 0px;
      z-index: 1;
    }
    .overlay {
      z-index: 9998;
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
    @media only screen and (max-width: 430px) {
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
  }import default from '../../redux/config/sagas';

  .ant-table-tbody {
    background: ${({ theme }) => theme.background.content};
  }

`;

export default PrivateLayoutWrapper;
