import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* background: ${({ theme }) => theme.background.content}; */}
  .viewContent {
    width: 100%;
    ${'' /* height: 100%; */}
  }
  .paginationRow {
    padding: 0px;
  }
  .ant-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 24px;
  }
  .ant-pagination-total-text {
    display: flex;
    align-items: center;
  }
  .ant-pagination-options {
    height: inherit;
  }
  .ant-select-arrow {
    right: 6px;
  }
  .ant-pagination-options-quick-jumper {
    font-weight: 300;
    font-size: 14px;
    line-height: inherit;
    height: inherit;
  }
  .ant-pagination-options-quick-jumper input {
    height: auto;
    border: 1px solid #d9d9d9;
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
    margin-bottom: 0;
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
    margin-bottom: 28px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .ant-input {
    border: 1px solid;
    border-color: ${({ theme }) => theme.border.default};
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
  .ant-select-selection--single {
    height: 32px;
  }
  .ant-select-selection__rendered,
  .ant-select-selection-selected-value {
    line-height: 32px;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    .ant-card-body .title {
      margin-right: 15px;
      width: 30%;
    }
    .ant-card-body .ant-col {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
    }
  }
  .ant-list {
    margin-top: 0 !important;
    .ant-col {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .ant-list-item {
      flex: 1;
    }
  }
`;
