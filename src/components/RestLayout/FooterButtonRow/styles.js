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
  .ant-btn {
    width: 140px;
    border-color: ${({ theme }) => theme.palette.primary};
  }
`;
