import styled from 'styled-components';
import { Icon } from 'antd';

export const DivWrapper = styled('div')``;
export const IconWrapper = styled(Icon)`
  color: ${props => props.theme.text};
  padding-right: 5px;
`;
