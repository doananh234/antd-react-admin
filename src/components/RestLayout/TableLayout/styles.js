import styled from 'styled-components';
import { Icon } from 'antd';

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
