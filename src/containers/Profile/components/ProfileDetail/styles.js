import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  .profile-info {
    display: flex;
    .info-section {
      flex-grow: 2;
      padding-top: 10px;
      padding-left: 56px;
      .profile-info-title {
        text-transform: uppercase;
        font-size: 18px;
        color: ${({ theme }) => theme.text.secondary};
      }
      .name-section {
        margin-top: 17px;
        font-size: 32px;
        margin-bottom: 10px;
      }
      .phone-section,
      .email-section {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 24px;
      .account-info {
        padding: 10px 20px;
        font-size: 18px;
        text-align: center;
        .username {
          font-weight: 600;
        }
      }
    }
  }
`;
