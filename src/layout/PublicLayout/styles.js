import styled from 'styled-components';
import loginBackground from '../../assets/images/publicbg.jpg';

const PublicLayoutWrapper = styled.div`
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${({ theme }) => theme.background.content};
    justify-content: center;
  }

  .layout-content {
    max-height: 789px;
    display: flex;
    flex-direction: row;
    background: ${({ theme }) => theme.background.container};
    box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.1);
    min-width: 70%;
  }

  .main-img {
    background-image: url(${loginBackground});
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 50%;
    background-color: white;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .main-content {
    flex: 1;
    padding: 50px;
    text-align: center;
    width: 50%;
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
