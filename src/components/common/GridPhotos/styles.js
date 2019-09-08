import styled from 'styled-components';

const GridPhotosWrapper = styled.div`
  flex-wrap: wrap;
  .thumbnail {
    width: 100%:
  }

  .images {
    display: flex;
  }

  .imageCount {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    position: relative;
    display: inline-block;
    .overlay {
      position: absolute;
      background: rgba(0,0,0, 0.4);
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      color: white;
      align-items: center;
      justify-content: center;
      display: flex;
      font-size: 20px;
      border-radius: 4px;
    }

    .overlay2 {
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
      }
      .anticon {
        color: #fff;
        font-size: 30px;
      }
    }
    &:hover {
      .overlay2 {
        visibility: visible;
      }

      }

    span {
      position: absolute;
      background: transparent;
    }
  }

  .image {
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }
`;

export default GridPhotosWrapper;
