import styled from 'styled-components';

export const TextWrapper = styled.span`
  fontfamily: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.text.primary};
  line-height: 20px;
  .bigTitle {
    /*64 */
    font-size: 64px;
    line-height: 70px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.text.primary};
  }
  .h1 {
    /* 36 - bold */
    font-size: 36px;
    line-height: 42px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.text.primary};
  }
  .h1SemiBold {
    /* 36 - bold */
    font-size: 36px;
    line-height: 42px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.text.primary};
  }
  .h2 {
    /* 30 - medium */
    font-size: 30px;
    line-height: 42px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.text.primary};
  }
  .h3 {
    /* 24 - semibold */
    font-size: 24px;
    line-height: 32px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.text.primary};
  }
  .h4 {
    /* 20 - semibold */
    font-size: 20px;
    line-height: 28px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.text.primary};
  }
  .h4White {
    /* 20 - semibold */
    font-size: 20px;
    line-height: 28px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: white;
  }
  .h5Gray {
    /* 16 - semibold - gray */
    font-size: 16px;
    line-height: 24px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.gray};
  }
  .h5 {
    /* 16 - semibold */
    font-size: 16px;
    line-height: 24px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.text.primary};
  }
  .buttonWhite {
    /* 14 - medium */
    font-size: 14px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: white;
  }
  .button {
    /* 14 */
    font-size: 14px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.text.primary};
  }
  .buttonGray {
    /* 14 */
    font-size: 14px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.gray};
  }
  .bodyGray {
    /* 14 - gray */
    font-size: 14px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.gray};
  }
  .bodyHighLight {
    /* 14 - blue */
    font-size: 14px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.text.highlight};
  }
  .body {
    /* 14 */
    font-size: 14px;
    line-height: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.text.primary};
  }
  .inputDisabled {
    /* 12 - disabled */
    font-size: 12px;
    line-height: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.text.disabled};
  }
  .input {
    /* 12 */
    font-size: 12px;
    line-height: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.text.primary};
  }
  .inputWhite {
    /* 12 - white */
    font-size: 12px;
    line-height: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: white;
  }
  .text {
    /*12 */
    font-size: 12px;
    line-height: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.text.primary};
  }
  .smallText {
    /*10 */
    font-size: 10px;
    line-height: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.text.lightPrimary};
  }
  /* txtUnderline */
  .txtUnderline {
    text-decoration-line: 'underline';
  }
  .light {
    ${({ theme }) => theme.fontWeight.light};
  }
  .medium {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  .bold {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  .semiBold {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  .left {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  .inline {
    display: inline;
  }
`;
