import styled from 'styled-components';

export default styled.div`
  height: 100%;
  background: ${({ theme }) => theme.background.content};
  padding: 24px 30px;
  .summary-title {
    padding-top: 10px;
    padding-left: 20px;
    text-transform: uppercase;
    font-size: 18px;
    color: #a4a4a4;
  }
  .summary-section {
    .summary-item {
      display: flex;
      padding: 13px 10px;
      .summary-icon {
        border-radius: 5px;
        background: rgb(62, 186, 194);
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 42px;
          color: white;
        }
      }
      .summary-content {
        flex-grow: 2;
        padding: 0 20px;
        .total {
          line-height: normal;
          font-size: 24px;
        }
        .title {
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
`;
