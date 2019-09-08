import styled from 'styled-components';

export const SummaryCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.content};
  border-radius: 4px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  padding: 15px 20px 20px 25px;
  margin-bottom: 20px;
  align-items: flex-end;
  .vIcon {
  }
  .icon {
    font-size: 24px;
    line-height: 36px;
    color: white;
    height: 36px;
  }
  .title,
  .value {
    color: white;
    background: transparent;
  }
  .vInfo {
    flex: 1;
    width: 100%;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
`;
