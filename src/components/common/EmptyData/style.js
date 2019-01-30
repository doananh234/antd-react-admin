import styled from 'styled-components';

const EmptyDataWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  .icon {
    line-height: 1;
  }
  i {
    font-size: 100px;
    color: #b3b3b3;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default EmptyDataWrapper;
