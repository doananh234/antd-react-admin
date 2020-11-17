import styled from 'styled-components';

const ActivitiesLogWrapper = styled.div`
  .list {
    border: none;
    width: 100%;
    background: ${({ theme }) => theme.background.content};
  }
  .listItem {
    display: block;
    background: ${({ theme }) => theme.background.content};
  }
  .ant-list-item-content {
    padding: 20 20 10 15px;
    display: block;
  }
`;

export default ActivitiesLogWrapper;
