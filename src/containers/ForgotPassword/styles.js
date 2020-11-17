import styled from 'styled-components';

const ForgotPasswordStyleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${'' /* justify-content: flex-end; */}
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
    right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
  }

  .isoLoginContentWrapper {
    ${'' /* width: 500px; */}
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
  }

  .isoLoginContent {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 70px 0px;
    position: relative;
    background-color: transparent;

    @media only screen and (max-width: 767px) {
      width: 100%;
      padding: 70px 20px;
    }

    .isoLogoWrapper {
      width: 100%;
      display: flex;
      margin-bottom: 50px;
      margin-right: 10px;
      justify-content: center;
      flex-shrink: 0;
      text-align: center;
    }

    .isoSignInForm {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      margin-top: 30px;
      .isoInputWrapper {
        margin-bottom: 15px;
        &:last-of-type {
          margin-bottom: 0;
        }

        input {
          &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.text.empty};
          }

          &:-moz-placeholder {
            color: ${({ theme }) => theme.text.empty};
          }

          &::-moz-placeholder {
            color: ${({ theme }) => theme.text.empty};
          }
          &:-ms-input-placeholder {
            color: ${({ theme }) => theme.text.empty};
          }
        }
      }

      .buttonWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      button {
        font-weight: 500;
      }
    }
  }
  .txtDescription {
    margin-top: 30px;
  }
  .txtError {
    margin-top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.alert.error};
  }
`;

export default ForgotPasswordStyleWrapper;
