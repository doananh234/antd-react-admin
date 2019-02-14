import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  flex: 1;
  input {
    background: ${({ theme }) => theme.background.content};
    box-shadow: 0 1px 10px -3px rgba(0, 0, 0, 0.15);
    max-width: 320px;
    min-width: 200px;
  }

  .ant-input {
    background: ${({ theme }) => theme.background.content} !important;
  }
`;
