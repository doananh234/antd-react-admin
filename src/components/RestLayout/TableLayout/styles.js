import styled from 'styled-components';
import { Table } from 'antd';
import Icon from '@ant-design/icons';

export const HeaderTableWrapper = styled.input`
  background: transparent;
  border: 1px dashed transparent;
  transition: all 0.3s;
  padding-left: 5px;
  transform: translate(-5px, 0px);
  text-transform: uppercase;
  &:hover {
    border: 1px dashed ${({ theme }) => theme.border.default};
  }
  &:focus {
    border: 1px dashed ${({ theme }) => theme.palette.primary};
    outline: none;
    background: ${({ theme }) => theme.background.content};
    transform: translate(0px, 0px);
  }
  &:disabled {
    border: 1px dashed transparent;
  }
  .highlightFilter {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const IconWrapper = styled(Icon)`
  &.highlightFilter {
    color: ${({ theme }) => theme.palette.primary} !important;
  }
`;

export const DropdownStyles = styled.div`
  .search-button {
    i {
      color: white;
    }
  }
`;

export const TableStyles = styled(Table)`
  .ant-table-content {
    overflow-x: auto;
    overflow-y: hidden;
  }
  // .ant-table-cell > div {
  //   width: auto !important;
  // }
  .ant-table-thead > tr > th {
    background: ${({ theme }) => theme.table.headerBackground} !important;
    color: ${({ theme }) => theme.table.headerColor} !important;
    font-size: 13px !important;
    font-weight: 700 !important;
  }
  .ant-table-tbody > tr:last-child > td {
    border: none !important;
  }
  .ant-table-tbody > tr {
    font-size: 12px;
  }
`;
