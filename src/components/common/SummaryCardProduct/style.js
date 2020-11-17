import styled from 'styled-components';

const SummaryCardProductStyles = styled.div`
  background: ${({ theme }) => theme.background.content};
  padding: 15px;
  height: 100%;
  .icon-summary {
    font-size: 30px;
  }
  .name-summary {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default SummaryCardProductStyles;
