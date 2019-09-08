import styled from 'styled-components';

export const PreviewWrapper = styled.div`
  margin-right: 5px;
  margin-top: 5px;
  position: relative;
  display: inline-block;
  .image {
    width: 100px;
    height: 100px;
    border-radius: 4px;
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
  .image:hover ~ .overlay {
    visibility: visible;
  }
`;
