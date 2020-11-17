import styled from 'styled-components';

const DetailSummaryProductStyles = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.content};
  height: 100%;
  position: relative;
  .ant-carousel {
    padding: 15px;
  }
  .carousel-item {
    display: flex !important;
    align-items: stretch;
    .image-content > img {
      ${'' /* height:100%; */}
      width: 100%;
      object-fit: contain;
    }
  }
  .right-carousel {
    display: flex !important;
    flex-direction: column;
    height: 100%;
  }
  .description-carousel {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    .sold {
      background: ${({ theme }) => theme.color.blue};
      border-radius: 5px;
      padding: 3px;
      color: white;
    }
    .name {
      font-size: 18px;
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .price {
      color: ${({ theme }) => theme.color.gray};
      font-size: 16px;
    }
  }

  .next-prev-button {
    display: flex;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    padding-right: 15px;
    button {
      margin-left: 5px;
      border-radius: 50%;
      background: #f3f6f7;
      border-color: aliceblue;
      width: 40px;
      height: 40px;
      i {
        font-size: 16px;
      }
    }
  }
`;

export default DetailSummaryProductStyles;
