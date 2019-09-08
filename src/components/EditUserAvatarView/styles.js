import styled from 'styled-components';

const EditUserAvatarViewWrapper = styled.div`
  .box {
    background-color: ${({ theme }) => theme.background.content};
    margin-bottom: 20px;
    .txtHeader {
      font-size: 16px;
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }
    .icEdit {
      color: ${({ theme }) => theme.text.primary};
      font-size: 17px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1, 1.1);
        color: ${({ theme }) => theme.palette.primary};
      }
    }
    .ant-card-head {
      background-color: ${({ theme }) => theme.card.header};
    }
  }

  .contentUserAvatar {
    display: flex;
    align-items: center;
  }

  .ant-form-explain-holder {
    display: none;
  }
  .vInfo {
    margin-left: 10px;
    padding-right: 30px;
    flex: 1;
    .ant-form-item {
      margin-bottom: 0px;
    }
    .icEdit {
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
  .txtName {
    input {
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      font-size: 20px;
      border: none;
      &:hover {
        border: 1px dashed ${({ theme }) => theme.palette.primary};
      }
    }
  }
  .lbStatus {
    font-size: 14px;
    & > *,
    .ant-select-selection__rendered,
    .ant-form-item-control,
    .ant-select-selection--single,
    .has-success {
      line-height: 1.5;
      height: 20px;
    }
  }
`;

export { EditUserAvatarViewWrapper };
