import styled from 'styled-components';

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  .viewSummary {
    width: 100%;
    margin-bottom: 20px;
  }
  .vBox {
    background: transparent;
    border: none;
    padding: 0 0px;
  }
  .row-chart {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .col-block {
    margin-bottom: 24px;
  }
`;

export default HomeWrapper;
