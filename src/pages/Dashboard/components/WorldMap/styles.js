import styled from 'styled-components';

const StylesWorldMap = styled.div`
  padding: 24px;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.content};
  border-radius: 4px;
  .rsm-svg {
    width: 100%;
    height: 300px;
  }
  .row-header {
    display: flex;
    justify-content: space-between;
  }
  .map-div {
    position: relative;
  }
  .zoom-div {
    position: absolute;
    right: 0;
    top: 10px;
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 5px;
      border-radius: 50%;
      background: #f3f6f7;
      border-color: aliceblue;
      i {
        font-size: 12px;
      }
    }
  }
  ${'' /* .rsm-geography {
    fill: '#D6D6DA' !important;
    outline: 'none';
    &:hover {
      fill: '#F53';
      outline: 'none';
    }
    &:pressed {
      fill: '#E42';
      outline: 'none';
    }
  } */}
  .note-map {
    height: auto;
    margin-top: 30px;
  }
  ${'' /* .circle:hover{
    stroke: '#098b94';
  } */}
`;
export default StylesWorldMap;
