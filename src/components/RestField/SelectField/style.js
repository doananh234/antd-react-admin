import styled from 'styled-components';

export const SelectFieldWrapper = styled.div`
  a {
    display: flex;
    justify-content: baseline;
    justify-items: baseline;
  }
  .icon {
    transform: rotate(0deg);
    margin-left: 5px;
    transform: unset;
    -webkit-transition: transform 0.5s; /* For Safari 3.1 to 6.0 */
    transition: transform 0.5s;
    .anticon .anticon-right {
      font-size: 20px;
    }
  }
  .openDropdown {
    transform: rotate(90deg);
  }
`;
