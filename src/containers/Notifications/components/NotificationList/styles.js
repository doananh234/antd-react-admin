import styled from 'styled-components';
import { List } from 'antd';

export default styled(List)`
  .notification-icon {
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f0f0;
    border-radius: 50%;
    svg {
      margin-right: 0;
    }
  }
  .ant-list-item {
    cursor: pointer;
    padding-left: 24px;
    padding-right: 24px;
  }
  .not-seen-noti {
    background: #d0d0d0;
  }
`;
