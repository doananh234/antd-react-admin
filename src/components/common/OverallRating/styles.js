import styled from 'styled-components';

const OverallRatingStyles = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  .header-overall {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    flex-direction: column;
    ${'' /* .ant-rate-star .anticon {
      font-size: 25px;
    } */}
    .rate-number {
      font-size: 50px;
      font-weight: 800;
      color: ${({ theme }) => theme.color.red};
    }
    .overallRating-text {
      margin-bottom: 10px;
      margin-top: 3px;
      font-size: 18px;
      font-weight: 700;
    }
    .reviews {
      margin-top: 15px;
      font-size: 16px;
    }
  }
  .progress-rating {
    width: 100%;
  }
  .start-item {
    .title-rating {
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
    }
  }
`;

export default OverallRatingStyles;
