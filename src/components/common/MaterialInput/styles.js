import styled from 'styled-components';
import theme from '../../../configs/theme';

export default styled.div`
  margin-top: 20px;
  position: relative;

  label {
    position: absolute !important;
    left: ${(props) => (props.isPrefix ? '40px' : '10px')};
    line-height: 2;
    top: 4px;
    transition: 300ms ease all;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.45);
  }

  input {
    font-size: 17px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border-top: none;
    border-left: none;
    border-right: none;
    display: block;
    padding-left: ${(props) => (props.isPrefix ? '45px' : '0px')};
    padding-right: ${(props) => (props.isSuffix ? '45px' : '0px')};
    &::placeholder {
      color: transparent !important;
    }
    &:focus {
      outline: none;
      box-shadow: none !important;
    }
    &:disabled {
      background: ${theme.background.content};
      color: ${theme.text.primary};
      cursor: text !important;
    }

    &:focus,
    ${'' /* &:not([value='']), */}
    &:not(:placeholder-shown),
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      & ~ label {
        top: -30px;
        left: 0px;
        ${'' /* font-size: 90%; */}
        color: ${theme.palette.primary};
      }
    }

    &:focus ~ .bar:before {
      width: 100%;
    }
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: ${theme.palette.primary};
      transition: 300ms ease all;
      left: 0%;
    }
  }

  .anticon {
    position: absolute;
    top: 8px;
    left: 11px;
  }
  .suffix {
    position: absolute;
    right: 30px;
    top: 0;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    input {
      width: 100%;
    }

  }
`;
