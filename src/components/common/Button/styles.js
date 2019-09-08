import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  border: 1px solid ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.primary};
  height: 32px;
  border-radius: 2px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
