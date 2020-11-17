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
  .text-headerTable {
    color: ${({ theme }) => theme.palette.headerTable};
  }
  .bg-primary {
    background: ${({ theme }) => theme.background.primary};
  }
  .bg-warning {
    background: ${({ theme }) => theme.background.warning};
  }
  .bg-error {
    background: ${({ theme }) => theme.background.error};
  }
  .t-14px-1\\.57 {
    font: normal normal 14px/1.57 ${({ theme }) => theme.fonts.primary};
  }
  .t-500-14px-1\\.57 {
    font: normal 500 14px/1.57 ${({ theme }) => theme.fonts.primary};
  }
  .t-500-16px-1\\.5 {
    font: normal 500 16px/1.5 ${({ theme }) => theme.fonts.header};
  }
  .t-500-24px-1\\.17 {
    font: normal 500 16px/1.17 ${({ theme }) => theme.fonts.header};
  }
  .ml-8px {
    margin-left: 8px;
  }
  .ant-card-body {
    padding-top: 20px
  }

  /* ------------------ Override antd---------------- */
  .ant-pagination .ant-pagination-item-active a {
    color: #ffffff;
  }

  .ql-editor {
    min-height: 200px;
  }
  .ant-form-item-label {
      label {
        color: #000;
        font-size: 12px;
        font-weight: 500;
      }
    }
    .html-content {
      border-radius:10px;
      width: 100%;
      background: white;
      word-break: break-word;
      img {
        max-width: 200px;
        max-height: 200px;
        object-fit:contain;
      }
    }
    .label {
      display: flex;
      align-items:center;
      svg {
        margin-right:5px;
      }
      path {
        fill: rgba(0, 0, 0, 0.45);
      }
    }
    .ant-input-number {
      width: 100%;
    }
`;

export default AppWrapper;
