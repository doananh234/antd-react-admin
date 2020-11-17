import styled from 'styled-components';

export const DetailSummaryItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.content};
  height: 100%;
  .title {
    color: ${({ theme }) => theme.text.headerTable};
    background: transparent;
    font-weight: 600;
    padding: 15px 15px 0px 15px;
  }
`;

const DetailSummaryRowStyle = styled.div`
  .row-detail-summary {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .col-card {
    margin-bottom: 24px;
  }
`;

export default DetailSummaryRowStyle;
