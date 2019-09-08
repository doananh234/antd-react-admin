import styled from 'styled-components';
import { Layout } from 'antd';

const HeaderWrapper = styled(Layout.Header)`
  border-bottom: 1.5px solid ${({ theme }) => theme.background.container};
  background: ${({ theme }) => theme.background.content};
  .btn {
    margin-right: 10px;
  }
  .trigger {
    color: ${({ theme }) => theme.text.primary};
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
    @media only screen and (max-width: 430px) {
      display: none;
    }
  }
  .localeSelect {
    padding: 5px;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.text.disabled};
    &.active {
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
