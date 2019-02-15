import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  transition: padding-left 0.3s ease 0.1s, padding-right 0.3s ease 0.1s, position 0 ease 0.3s;
  .extraAction {
    margin-bottom: 0.5em;
    margin-left: 15px;
  }
  h1 {
    font-size: 19px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.color[0]};
    flex: 1;
    display: flex;
    align-items: center;
    white-space: nowrap;

    ${'' /* @media only screen and (max-width: 767px) {
      margin: 0 10px;
    } */}

    &:before {
      content: '';
      width: 5px;
      height: 40px;
      background-color: ${({ theme }) => theme.palette.color[1]};
      display: flex;
      margin: 0 15px 0 0;
    }

    &:after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.palette.color[1]};
      display: flex;
      margin-left: 15px;
    }
  }
`;
