import styled from 'styled-components';
import { Form } from 'antd';

export const FilterFormWrapper = styled(Form)`
  margin: auto;
  .filterContainer {
    display: flex;
    @media only screen and (max-width: 576px) {
      flex-direction: column;
    }
  }
  .filterContent {
    flex: 1;
    justify-content: flex-end;
    margin-right: 10px;
    @media only screen and (max-width: 576px) {
      margin-right: 0px;
    }
  }
  .filterActions {
    width: 200px;
    @media only screen and (max-width: 576px) {
      display: block;
      width: 100%;
      margin-top: 15px;
    }
  }
  .border {
  }
  .filterButton {
    width: 100%;
    font-size: 14px;
  }
  .clearButton {
    background: ${({ theme }) => theme.background.disabled};
    color: white;
  }
  .ant-form-item {
    margin-bottom: 0px;
    margin-right: -1px;
  }
  .ant-form-item-label label {
    color: ${({ theme }) => theme.text.itemLabel};
  }
`;
