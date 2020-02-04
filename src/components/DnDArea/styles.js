import styled from 'styled-components';

export const TaskStatusColumnWrapper = styled.div`
  .ant-card-extra {
    padding: 0;
  }
  .ant-card-body {
    padding: 0px;
    border-radius: 2px;
    box-shadow: 4px 3px 12px -7px rgba(123, 135, 148, 0.24);
    .btnNewFeature {
      width: calc(100% - 20px);
      margin-left: 10px;
      margin-bottom: 20px;
    }
  }
  .D2DList {
    background: ${({ theme }) => theme.background.content};
    ${'' /* padding: 10px; */}
    border-radius: 2px;
    padding-bottom: 15px;
    &.draggingOver {
      background: ${({ theme }) => theme.background.content};
    }
    ${'' /* overflow-y: hidden; */}
    max-height: -webkit-fill-available;
  }
  .D2DItem {
    ${'' /* user-select: none; */}
    margin-bottom: 10px;
    background: ${({ theme }) => theme.background.content};
    &.selected {
      background: ${({ theme }) => theme.background.content};
      box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.2);
    }
    .footerTaskCard {
      display: flex;
      margin-top: 10px;
    }
    .time,
    .taskCount {
      display: flex;
      align-items: center;
      .anticon {
        margin-right: 5px;
        color: ${({ theme }) => theme.text.lightPrimary};
      }
      .txtFooter {
        margin-right: 15px;
        color: ${({ theme }) => theme.text.secondary};
      }
    }
  }
`;
