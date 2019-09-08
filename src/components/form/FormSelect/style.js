import styled from 'styled-components';
import { Select } from 'antd';

export const SelectWrapper = styled(Select)`
  .ant-select-selection-selected-value {
    color: #000;
  }
  &.ant-select-disabled {
    .ant-select-selection {
      background: ${({ theme }) => theme.background.content};
      border: none;
    }
    .ant-select-arrow {
      display: none;
    }
  }
`;
