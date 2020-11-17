import styled from 'styled-components';

export default styled.div`
  .ant-tabs-tabpane {
    background-color: ${({ theme }) => theme.background.content};
    padding-bottom: 20px;
    .ant-pagination-options {
      padding-right: 15px;
    }
  }
  .page-header {
    display: flex;
    justify-content: space-between;
    .ant-btn {
      width: 124px;
      height: 40px;
      border-radius: 2px;
      font-weight: 600;
    }
  }
  .ant-tabs-bar {
    margin-bottom: 0px;
    border-bottom: 0px;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    border: 0px solid ${({ theme }) => theme.background.content};
    background-color: transparent;
    font-weight: bold;
    color: ${({ theme }) => theme.text.secondary};
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    border: 0px solid ${({ theme }) => theme.background.content};
    background-color: ${({ theme }) => theme.background.content};
    font-weight: bold;
    color: ${({ theme }) => theme.text.primary};
  }
`;
