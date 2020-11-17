import styled from 'styled-components';

export default styled.div`
  display: flex;
  .ant-input,
  .ant-select-selection,
  .ant-input-number,
  .ant-select-dropdown-menu-item,
  .ant-select-dropdown-menu,
  .ant-select-dropdown,
  .ant-select-clear-icon,
  .ant-select-dropdown-menu-vertical {
    background: ${({ theme }) => theme.background.gray};
    &:hover,
    &:focus,
    &:active {
      background: ${({ theme }) => theme.background.gray};
      border: 1px solid ${({ theme }) => theme.palette.primary};
    }
  }
  .ant-input-number,
  .ant-select {
    width: 100%;
  }
  .ant-select-selection__clear {
    background-color: transparent;
    color: white;
    border-radius: 5px;
  }
  .ant-select-arrow-icon {
    background-color: transparent;
  }
  .avatar-section {
    flex-direction: column;
    padding: 10px 24px;
    .header {
      font-size: 20px;
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }
  .form-section {
    flex-grow: 2;
    ${'' /* padding: 10px 34px; */}
    flex-wrap: wrap;
    .ant-form-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .ant-form-item-label {
        text-align: left;
      }
    }
  }
`;
