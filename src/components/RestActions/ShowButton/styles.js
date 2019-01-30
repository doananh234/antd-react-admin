import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  border: 0px !important;
  color: ${({ theme }) => theme.palette.primary} !important;
  height: 30px !important;
  background: transparent !important;
  &:hover {
    background: transparent;
    transform: scale(1.1, 1.1);
  }
  &:focus {
    background: transparent;
    transform: scale(1.1, 1.1);
  }
  .anticon {
    font-size: 20px;
  }
`;
