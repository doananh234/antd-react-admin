import styled, { createGlobalStyle } from 'styled-components';
import { CLASS_UTILITY } from 'utils/css';

const AppWrapper = styled.div`
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${CLASS_UTILITY}
  .note {
    font-size: 12px;
    color: ${({ theme }) => theme.text.note};
  }
  .black {
    color: ${({ theme }) => theme.text.primary};
  }
  & > * {
    font-family: 'Open Sans', sans-serif;
  }
  .anticon:before {
    display: block;
    font-family: 'anticon', 'duc-tri-dashboard' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'duc-tri-dashboard' !important;
  }
  .text-primary {
    color: ${({ theme }) => theme.palette.primary};
  }
  .bg-primary {
    background: ${({ theme }) => theme.palette.primary};
  }
  .t-14px-1\\.57 {
    font: normal normal 14px/1.57 ${({ theme }) => theme.fonts.primary};
  }
  .t-500-14px-1\\.57 {
    font: normal 500 14px/1.57 ${({ theme }) => theme.fonts.primary};
  }
  .ml-8px {
    margin-left: 8px;
  }

  /* ------------------ Override antd---------------- */
  .ant-pagination .ant-pagination-item-active a {
    color: #ffffff;
  }
`;

export default AppWrapper;
