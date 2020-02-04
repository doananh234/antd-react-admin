import styled from 'styled-components';

export const FilterDropdownWrapper = styled.div`
  width: 200px;
  padding: 10px;
  .ant-checkbox-wrapper {
    display: block;
    padding: 5px 0px;
    & + .ant-checkbox-wrapper {
      margin-left: 0px;
    }
  }
  .filterContent {
    max-height: 300px;
    overflow: auto;
  }

  .footer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .ant-btn {
      flex: 1;
      &:last-child {
        margin-left: 10px;
      }
    }
  }
`;
