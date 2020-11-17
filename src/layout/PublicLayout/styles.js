import styled from 'styled-components';
// import loginBackground from '../../assets/images/login_background.jpg';
import imgLogin from 'assets/images/background.jpg';

const PublicLayoutWrapper = styled.div`
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .main-img {
    background-color: #000;
    background-image: url(${imgLogin});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    flex: 1;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .main-content {
    background-color: white;
    padding: 30px 40px;
    text-align: left;
    ${'' /* height: 880px; */}
    max-width: 100%;
    min-width: 40%;
    width: auto;
    @media only screen and (max-width: 768px) {
      flex: 1;
      max-width: 100%;
    }
    ${'' /* .logo {
      width: 170px;
      text-align: left;
      padding: 30px 0px 60px 0px;
    } */}
    .logo {
      width: 201.7px;
      height: 56px;
      object-fit: contain;
    }
    .title {
      ${'' /* .maintitle {
        width: 82%;
        font-family: 'csm-web-text-semibold';
        font-size: 40px;
        text-align: left;
      }
      .mintitle {
        font-family: 'csm-web-text-medium';
        font-size: 25px;
        text-align: left;
        margin-bottom: 50px;
      } */}
      .maintitle {
        font-family: 'csm-web-text-medium';
        font-size: 48px;
        font-weight: bold;
        line-height: 58px;
        ${'' /* text-align: left; */}
        color: #05060a;
      }
      .mintitle {
        font-family: 'csm-web-text-medium';
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        text-align: left;
        color: #05060a;
      }
    }
    .ant-btn {
      height: 50px;
      font-size: 20px;
      font-weight: 600;
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
  @media only screen and (max-width: 1440px) {
    .main-content {
      .title {
        .maintitle {
          font-size: 46px;
        }
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    .main-content {
      .title {
        .maintitle {
          font-size: 39px;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .main-content {
      .title {
        .maintitle {
          font-size: 30px;
          line-height: 30px;
        }
        .mintitle {
          font-size: 12px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .main-content {
      .title {
        .maintitle {
          font-size: 48px;
          line-height: 48px;
        }
        .mintitle {
          font-size: 24px;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .main-content {
      .title {
        .maintitle {
          font-size: 30px;
          line-height: 30px;
        }
        .mintitle {
          font-size: 12px;
        }
      }
    }
  }
`;

export default PublicLayoutWrapper;
