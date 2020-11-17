import styled from 'styled-components';

export const HeaderSectionWrapper = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  .anticon {
    margin-right: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 16px;
  }
`;
