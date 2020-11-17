import styled from 'styled-components';

const DetailSummaryRevenueStyles = styled.div`
  display: flex;
  flex-direction: column;
  .icon {
    font-size: 26px;
    line-height: 0;
    font-weight: 600;
    border-radius: 50%;
    font-size: 26px;
    background-color: #f0f2f7;
    color: #9ba7ca;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .value {
    color: ${({ theme }) => theme.text.headerTable};
    background: transparent;
    font-size: 25px;
    font-weight: 900;
  }
  .value-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .row-text-bottom {
    ${'' /* margin-top: 10px; */}
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
  .description {
    padding: 0px 15px 15px 15px;
  }
`;

export const BarChartStyles = styled.div`
  .recharts-wrapper,
  .recharts-surface {
    width: 100% !important;
  }
`;

export default DetailSummaryRevenueStyles;
