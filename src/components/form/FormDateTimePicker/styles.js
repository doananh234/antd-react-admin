import styled from 'styled-components';

export const DateTimePickerWrapper = styled.div`
  width: 100%;
  .viewTimePicker,
  .viewDatePicker {
    width: 100%;
  }
  .ant-form-item-control-input-content {
    .ant-form-item {
      margin: 0;
    }
  }
  .ant-calendar-picker-icon {
    color: ${({ theme }) => theme.text.formIcon};
  }
`;
