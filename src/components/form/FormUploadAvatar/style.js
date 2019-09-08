import styled from 'styled-components';

const UploadImageWrapper = styled.div`
  border: solid 1px ${({ theme }) => theme.border.default};
  border-radius: 50%;
  .ant-form-item-control {
    display: flex;
    justify-content: center;
    cursor: pointer;
    .ant-avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      .anticon {
        font-size: 30px;
      }
    }
  }

  .image-uploader .image-hover i.image-hover-icon {
    font-size: 25px;
    -webkit-transition: font-size 0.5s;
    transition: font-size 0.5s;
    color: transparent;
  }

  .image-uploader:hover .image-hover i.image-hover-icon {
    font-size: 30px;
    color: #fff;
  }

  .image-uploader div.image-hover {
    background: transparent;
    -webkit-transition: background 0.2s;
    transition: background 0.2s;
  }
  .image-uploader:hover div.image-hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .image-uploader {
    position: relative;

    .default-image {
      font-size: 25px;
    }
    .image-hover {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border-radius: 50%;
    }
  }

  .image-uploader:hover {
    .image-hover {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .avatar-uploader {
    .upload-div {
      position: relative;

      img {
        width: 86px;
        height: 86px;
      }

      .preview-div {
        opacity: 0;
        display: none;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .ant-upload-list-item-actions {
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          z-index: 10;
          opacity: 1;
          white-space: nowrap;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;

          .anticon {
            z-index: 999;
            transition: all 0.3s;
            cursor: pointer;
            font-size: 25px;
            width: 25px;
            color: hsla(0, 0%, 100%, 0.85);
            margin: 0 4px;
          }
        }
      }

      &:hover {
        .preview-div {
          opacity: 1;
          display: block;
        }
      }
    }
  }
  .ant-form-item {
    margin-bottom: 0px;
  }
`;

export default UploadImageWrapper;
