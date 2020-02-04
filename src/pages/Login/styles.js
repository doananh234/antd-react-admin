import styled from 'styled-components';

export default styled.div`
  text-align: left;
  height: 100%;
  .logo {
    width: 50px;
    height: 50px;
  }
  .title {
    margin: 50px 0 20px;
    & span {
      font-size: 35px;
      font-weight: bold;
      line-height: 1;
      color: ${({ theme }) => theme.text.secondary};
    }
    .highlight {
      color: ${({ theme }) => theme.palette.primary};
    }
  }

  .sub-title {
    font-size: 14px;
    margin-bottom: 90px;
    color: ${({ theme }) => theme.text.primary};
    max-width: 300px;
  }

  .sub-action-div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 10px;
    a {
      color: ${({ theme }) => theme.text.primary};
    }
  }

  .action-div {
    & button {
      width: 100%;
    }
  }
  .register-form-button {
    margin-top: 10px;
  }
`;
