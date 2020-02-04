import styled from 'styled-components';

export const SelectIconWrapper = styled.div`
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .icon {
    width: 50px;
    height: 50px;
    cursor: pointer;
    font-size: 30px;
    border: 1px solid ${({ theme }) => theme.border.light};
    padding: auto;
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    &.selected {
      background: ${({ theme }) => theme.palette.primary};
      color: white;
    }
  }
`;
