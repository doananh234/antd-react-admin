import styled from 'styled-components';
import theme from '../../configs/theme';

export default styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 500px;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: ${theme.palette.primary};

  .main {
    padding: 20px;
  }

  img {
    width: 100%;
  }

  .text-div {
    margin: 20px 0;

    > div {
      line-height: 1;
      font-size: 30px;
    }

    > div:first-child {
      font-size: 80px;
    }
  }
`;
