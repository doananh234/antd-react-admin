import styled from 'styled-components';

const BoxWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.background.content};
  // border: 1px solid ${({ theme }) => theme.border.default};
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    ${'' /* padding: 20px; */}
  }

  &.half {
    width: calc(50% - 34px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export { BoxWrapper };
