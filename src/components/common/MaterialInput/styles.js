import styled from 'styled-components';
import theme from '../../../configs/theme';

export default styled.div`
  padding-top: 30px;
  position: relative;
  background-color: white;
  border: 1px solid ${theme.border.default};
  label {
    position: absolute !important;
    left: ${props => (props.isPrefix ? '30px' : '10px')};
    line-height: 1.5;
    top: 26px;
    transition: 300ms ease all;
    pointer-events: none;
    color: #c7c7c7;
  }

  .bar {
    position: absolute;
    display: block;
    max-height: 0px;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 3px;
    z-index: 2;
    background: ${theme.palette.primary};
    transition: 300ms ease all;
  }
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    display: block;
    padding-left: ${props => (props.isPrefix ? '30px' : '10px')};
    padding-right: ${props => (props.isSuffix ? '30px' : '0px')};
    border-bottom: none !important;
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
    &:not([value='']),
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      & ~ label {
        top: 8px;
        left: 10px;
        font-size: 90%;
        ${'' /* color: ${theme.palette.primary}; */}
      }
    }

    &:focus ~ .bar {
      max-height: 100%;
    }
  }
  i {
    position: absolute;
    bottom: 8px;
    left: 11px;
  }
  .suffix {
    position: absolute;
    right: 30px;
    top: 0;
  }
`;
