import styled from 'styled-components';

const AppWrapper = styled.div`
  .anticon:before {
    display: block;
    font-family: 'anticon', 'csm-web' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'csm-web' !important;
  }
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
`;

export default AppWrapper;
