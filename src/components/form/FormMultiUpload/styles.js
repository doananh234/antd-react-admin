import styled from 'styled-components';

export const FormMultiUploadWrapper = styled.div`
  min-height: 200px;
  & > span {
    display: flex;
  }
  .ant-upload-list {
    margin-left: 8px;
  }
  .uploadArea {
    margin: auto;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    .anticon {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 60px !important;
    }
    color: ${({ theme }) => theme.text.secondary};
  }
  .ant-upload.ant-upload-drag {
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    border: 5px dashed ${({ theme }) => theme.border.default};
    color: ${({ theme }) => theme.text.secondary};
    top: 0;
    .ant-upload-drag-container {
      ${'' /* text-align: left;
      vertical-align: top; */}
    }
    .overlayImage {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.background.loadingBackgroundColor};
      opacity: 0;
      transition: 300ms ease all;
      img {
        transition: 300ms ease all;
        width: 200px;
        height: 200px;
        object-fit: contain;
        transform: scale(0.5);
      }
    }
    &:hover {
      .uploadArea {
        .anticon {
          color: ${({ theme }) => theme.palette.primary};
        }
        color: ${({ theme }) => theme.palette.primary};
      }
    }
  }
  .ant-upload.ant-upload-drag-hover {
    .overlayImage {
      opacity: 1;
      img {
        transform: scale(1);
      }
    }
  }

  .uploadImage {
    display: inline-flex;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    margin: 5px;
    position: relative;
    z-index: 2;
    background: ${({ theme }) => theme.background.content};
    .lbSetDefault {
      background: ${({ theme }) => theme.background.disabled};
      color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      cursor: pointer;
      visibility: hidden;
      &.active {
        visibility: visible;
        background: ${({ theme }) => theme.palette.primary};
      }
      &:hover {
        visibility: visible;
        background: ${({ theme }) => theme.palette.primary};
      }
    }
    .image {
      width: 100px;
      height: 100px;
      border-radius: 4px;
      background: ${({ theme }) => theme.background.loadingBackgroundColor};
    }
    .overlay {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 5px;
      bottom: 0px;
      width: 100px;
      height: 100px;
      display: flex;
      z-index: 2;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      visibility: hidden;
      &:hover {
        visibility: visible;
        & ~ .lbSetDefault {
          visibility: visible;
        }
      }
      .anticon {
        color: #fff;
        font-size: 24px;
        margin: 5px;
      }
    }

    &:hover {
      .overlay {
        visibility: visible;
      }
    }
    .image:hover ~ .overlay {
      visibility: visible;
    }
    .loading {
      position: absolute;
    }
  }
  .selectedImage {
    max-height: 100%;
    overflow-y: auto;
    height: 100%;
  }
`;
