import styled from 'styled-components';

export const SummaryCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.content};
  border-radius: 4px;
  ${'' /* box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15); */}
  padding: 15px 20px 20px 25px;
  align-items: flex-end;
  .vIcon {
  }
  .icon-wrapper {
    min-width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    .icon {
      font-size: 24px;
      line-height: 0;
      color: white;
    }
  }

  .icon {
    font-size: 26px;
    line-height: 0;
    font-weight: 600;
  }
  .title,
  .value {
    color: ${({ theme }) => theme.text.headerTable};
    background: transparent;
    font-size: 25px;
    font-weight: 900;
  }
  .value-div {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .text-bottom {
    font-size: 12px;
    .percent-value,
    .percent-value > i {
      color: ${({ theme }) => theme.palette.primary};
    }

    .text {
      color: ${({ theme }) => theme.color.gray};
    }
  }
  .title {
    font-weight: 600;
    font-size: 15px;
  }
  .vInfo {
    flex: 1;
    width: 100%;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  .col-block {
    margin-bottom: 24px;
  }
`;
