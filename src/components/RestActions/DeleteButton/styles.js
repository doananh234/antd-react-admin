import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  min-width: 30px;
  margin: 0px 5px;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  &:focus {
    transform: scale(1.1, 1.1);
  }
  .anticon {
    font-size: 20px;
  }
`;
