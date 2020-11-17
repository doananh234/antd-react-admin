import styled from 'styled-components';

const StylesChartRevenue = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.content};
  border-radius: 4px;
  .area-chart {
    width: 500px;
    height: 400px;
  }
  .row-header {
    display: flex;
    justify-content: space-between;
  }
`;

export const LegendStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  .legend-item {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .legend-item:hover {
    cursor: pointer;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const TooltipStyles = styled.div`
  background: white;
  padding: 15px;
  .circle-tooltip {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .content-tooltip {
    list-style-type: none;
    div {
      display: flex;
      align-items: center;
    }
  }
  .title-tooltip {
    ${'' /* padding: 5px; */}
    margin-bottom: 10px;
  }
  .strong-value {
    margin-left: 5px;
  }
`;
export default StylesChartRevenue;
