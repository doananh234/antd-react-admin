import styled from 'styled-components';

export const DateTimePickerWrapper = styled.div`
  width: 100%;
  .viewTimePicker,
  .viewDatePicker {
    width: 100%;
  }

  .ant-calendar-picker-icon {
    color: ${({ theme }) => theme.text.formIcon};
  }
`;
