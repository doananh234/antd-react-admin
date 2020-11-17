import styled from 'styled-components';

const DetailSummaryRevenueStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PieChartStyles = styled.div`
  .recharts-wrapper {
    width: 100% !important;
  }
`;

export const TooltipStyles = styled.div`
  padding: 10px;
  color: white;
  border-radius: 5px;
  .strong-text {
    margin-left: 5px;
  }
`;

export const LegendStyles = styled.div`
  display: flex;
  flex-direction: column;
  .value-legend {
    font-weight: 900;
    font-size: 20px;
  }
  .name-legend {
    display: flex;
    align-items: center;
    .circle {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .name {
      margin-left: 5px;
      font-size: 12px;
    }
  }
  .legend-item {
    margin-bottom: 5px;
  }
`;

export default DetailSummaryRevenueStyles;
