import styled from 'styled-components';

const ResetPasswordStyleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background-size: cover;
  background: white;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
    right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
  }

  .isoLoginContentWrapper {
    width: 500px;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
  }

  .isoLoginContent {
    display: flex;
    flex-direction: column;
    padding: 50px;
    position: relative;
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
      padding-top: 30px;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;

      .isoInputWrapper {
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

      .isoForgotPass {
        font-size: 12px;
        color: ${({ theme }) => theme.text.tabTitle};
        text-decoration: none;

        &:hover {
          color: ${({ theme }) => theme.palette.primary};
        }
      }
      button {
        font-weight: 500;
      }
    }
  }

  .buttonWrapper {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    .ant-btn {
      width: 200px;
    }
  }
`;

export default ResetPasswordStyleWrapper;
