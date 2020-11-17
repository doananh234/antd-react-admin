import styled from 'styled-components';

const ProductCartViewStyles = styled.div`
  background-color: ${({ theme }) => theme.background.content};
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  .image-div {
    height: 180px;
    display: flex;
    justify-content: center;
    a {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .image-product {
      height: 100%;
      object-fit: contain;
    }
  }

  .content-info {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: column;
    .price-type {
      display: flex;
      justify-content: space-between;
      .type-name {
        font-size: 14px;
      }
      .price {
        font-size: 18px;
        font-weight: 600;
      }
      .oldPrice {
        font-size: 14px;
        text-decoration: line-through;
        margin-left: 15px;
      }
    }
    .name-rate {
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 16px;
        font-weight: 600;
        align-self: center;
      }
    }
  }
  .button-bottom {
    display: flex;
    justify-content: center;
  }
  .button-cart {
    width: 100%;
    height: 38px;
    font-size: 16px;
  }
  .anticon-star {
    font-size: 16px;
  }
  .remark {
    position: absolute;
    top: -6.1px;
    right: 10px;
    &:after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-top: 10px solid ${({ theme }) => theme.color.orange};
    }
    .label-item {
      background: ${({ theme }) => theme.color.orange};
      display: block;
      padding: 8px 8px 4px;
      border-top-right-radius: 8px;
      width: 80px;
      color: #fff !important;
      text-align: center !important;
      font-size: 14px;
    }
    .label-item:after {
      height: 6px;
      width: 6px;
      left: -6px;
      top: 0;
      border-radius: 8px 8px 0 0;
      background: ${({ theme }) => theme.color.darkOrange};
      position: absolute;
      content: '';
    }
    .label-item:before {
      height: 6px;
      width: 4px;
      left: -4px;
      top: 0;
      background: ${({ theme }) => theme.color.orange};
      position: absolute;
      content: '';
    }
  }
`;

export default ProductCartViewStyles;
