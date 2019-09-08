import styled from 'styled-components';
// import loginBackground from '../../assets/images/login_background.jpg';

const PublicLayoutWrapper = styled.div`
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .main-img {
    background-image: url(https://res.cloudinary.com/csmenouvo/image/upload/v1554345431/undraw_status_update_jjgk.png);
    background-color: transparent;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    flex: 1;
    background-color: white;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .main-content {
    background-color: white;
    padding: 70px 50px;
    text-align: center;
    height: 100vh;
    max-width: 450px;
    min-width: 450px;
    width: auto;
    @media only screen and (max-width: 768px) {
      flex: 1;
      max-width: 100%;
    }
  }

  .ant-form-item-children {
    display: block;
  }
  .ant-divider-horizontal.ant-divider-with-text {
    color: #e8e8e8;
  }
  .ant-divider {
    color: #e8e8e8;
  }
`;

export default PublicLayoutWrapper;
