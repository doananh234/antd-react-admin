import styled from "styled-components";

export const HeaderSectionWrapper = styled.h3`
  color: ${({ theme }) => theme.text.secondary};
  text-transform: uppercase;
  .anticon {
    margin-right: 10px;
    font-size: 20px;
  }
`;
