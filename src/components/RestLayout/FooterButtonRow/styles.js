import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  width: 100%;
  align-items: center;
`;

export const FooterButtonRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  .ant-btn {
    width: 140px;
    font-weight: 500;
    border: none;
  }
  &.showTotal {
    margin-top: 0px;
    margin-bottom: 0px;
    button {
      width: 100%;
      border-radius: 0px;
      height: 60px;
    }
  }
  .btn-back {
    background-color: ${({ theme }) => theme.background.gray};
    &:hover {
      background-color: ${({ theme }) => theme.background.gray};
    }
  }
`;
