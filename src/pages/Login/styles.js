import styled from 'styled-components';

export default styled.div`
  .title {
    margin: 15px 0 40px;
    & span {
      font-size: 24px;
      font-weight: 300;
      line-height: 1;
      text-transform: uppercase;
      color: #788195;
    }
  }

  .sub-action-div {
    display: flex;
    justify-content: space-between;
    margin: 25px 0 10px;
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
