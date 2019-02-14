import styled from 'styled-components';
// import loginBackground from '../../assets/images/login_background.jpg';

const PublicLayoutWrapper = styled.div`
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .main-img {
    background-image: url(https://res.cloudinary.com/csmenouvo/image/upload/v1550032735/background/login_background.jpg);
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
  }

  .main-content {
    background-color: white;
    padding: 70px 50px;
    text-align: center;
    height: 100vh;
    max-width: 450px;
    min-width: 450px;
    width: auto;
    @media only screen and (max-width: 500px) {
      min-width: 320px;
      width: 100%;
    }
  }
`;

export default PublicLayoutWrapper;
