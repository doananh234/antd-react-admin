import styled from 'styled-components';

export const DateTimePickerWrapper = styled.div`
  width: 100%;
  .viewTimePicker,
  .viewDatePicker {
    width: 100%;
    background: transparent;
    color: white;
    border: none;
    border-radius: 0px;
    box-shadow: none;
    .ant-calendar-picker-input,
    .ant-input {
      background: transparent;
      color: white;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.background.input};
      padding-left: 0px;
      border-radius: 0px;
      box-shadow: none;
    }
    .ant-calendar-picker-icon {
      color: white;
    }
    .ant-time-picker-input {
      background: transparent;
      color: white;
      border: none;
      padding-left: 0px;
      font-size: 17px;
      font-weight: bold;
      border-radius: 0px;
      box-shadow: none;
      &:hover,
      &:focus,
      &:active {
        font-size: 17px;
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 0px;
        box-shadow: none;
      }
    }
  }
  .title {
    font-size: 14px;
  }
  .ant-time-picker-panel-input {
    width: 50px;
  }
`;
