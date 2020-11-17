import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  border: 0px !important;
  color: ${({ theme }) => theme.text.primary} !important;
  height: 30px !important;
  background: transparent !important;
  box-shadow: none !important;
  &:hover {
    background: transparent;
    transform: scale(1.1, 1.1);
    color: ${({ theme }) => theme.palette.primary} !important;
  }
  &:focus {
    background: transparent;
    transform: scale(1.1, 1.1);
    color: ${({ theme }) => theme.palette.primary} !important;
  }
  .anticon {
    font-size: 20px;
  }
`;
