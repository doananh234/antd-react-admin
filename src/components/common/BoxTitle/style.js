import styled from 'styled-components';

const BoxTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

const BoxSubTitle = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  line-height: 24px;
`;

export { BoxTitle, BoxSubTitle };
