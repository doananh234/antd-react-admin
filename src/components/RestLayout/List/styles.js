import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  .viewContent {
    width: 100%;
    height: 100%;
  }
  .paginationRow {
    padding: 0px;
  }
  .ant-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 35px;
  }
  .ant-pagination-total-text {
    display: flex;
    align-items: center;
  }
  .ant-pagination-options-quick-jumper {
    font-weight: 300;
    font-size: 14px;
  }
  .ant-select-selection-selected-value {
    font-weight: 300;
    font-size: 14px;
  }
  .ant-pagination-item {
    font-weight: 300;
    font-size: 14px;
  }
  .box {
    padding: 0px;
    border: 0px;
    border-radius: 5.5px;
    margin-bottom: 20px;
  }
  .txtTotal {
    font-weight: normal;
  }
  .item {
    background: ${({ theme }) => theme.background.content};
    margin-bottom: 3px;
    border-radius: 4px;
    .ant-list-item-content {
      padding: 15px;
    }
  }
  .ant-table-body {
    overflow-x: auto !important;
  }
  .vActions {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .ant-table-thead {
    & > tr {
      & > th {
        ${'' /* text-transform: uppercase; */}
        ${'' /* line-height: 17px; */}
        background: ${({ theme }) => theme.background.headerTable};
        color: ${({ theme }) => theme.text.headerTable};
        font-size: 12px;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        & > div {
          white-space: nowrap;
        }
      }
    }
  }
`;
