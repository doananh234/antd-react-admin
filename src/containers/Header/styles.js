import styled from 'styled-components';
import { Layout, Drawer } from 'antd';

export const DrawerStyles = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
`;

const HeaderWrapper = styled(Layout.Header)`
  border-bottom: 1.5px solid ${({ theme }) => theme.background.container};
  background: ${({ theme }) => theme.background.content};
  .btn {
    margin-right: 10px;
  }
  .notification-section {
    margin-right: 20px;
    .ant-btn {
      padding: 0;
      border: none;
      i {
        font-size: 20px;
      }
    }
  }
  .user-role {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;
    justify-content: center;
    & > div {
      line-height: normal;
    }
    .name {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .trigger {
    color: ${({ theme }) => theme.text.primary};
    font-size: 24px;
    transition: 300ms ease all;
  }
  .reverse-trigger {
    transform: rotate(180deg);
  }

  .leftHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 430px) {
      width: 100%;
      display: inherit;
      padding-right: 45px;
    }
  }
  .rightHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 640px) {
      .user-role {
        display: none;
      }
    }
  }
  .localeSelect {
    padding: 5px;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.text.disabled};
    &.actife {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
  &.withoutSidebar {
    .leftHeader {
      .ant-page-header {
        padding: 0px;
      }
    }
  }
`;

export default HeaderWrapper;
