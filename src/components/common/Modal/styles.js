import styled from 'styled-components';
import { Drawer } from 'antd';

export const ModalWrapper = styled(Drawer)`
  ${'' /* max-height: 90%; */}
  min-height: 30%;

  .drawerContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .ant-drawer-content-wrapper {
    min-width: 450px;
    .ant-drawer-body {
      padding: 0px;
      padding-top: 60px;
      height: 100%;
      overflow: hidden;
      & > div {
        height: 100%;
        overflow: hidden;
      }
    }
    .ant-form {
      padding: 10px 24px;
    }
  }
  .ant-modal-header {
    background: ${({ theme }) => theme.background.content};
    border-bottom: 1px solid ${({ theme }) => theme.background.container};
    color: ${({ theme }) => theme.palette.primary};
  }
  .ant-modal-content {
    background: ${({ theme }) => theme.background.container};
    padding-top: 60px;
  }
  .ant-modal-title {
    color: ${({ theme }) => theme.palette.primary};
    font-size: 35px;
  }
  .ant-modal-close,
  .ant-modal-close-icon {
    display: none;
  }
  .ant-input,
  .ant-select-selection,
  .ant-input-number,
  .ant-select-dropdown-menu-item,
  .ant-select-dropdown-menu,
  .ant-select-dropdown,
  .ant-select-clear-icon,
  .ant-select-dropdown-menu-vertical {
    background: ${({ theme }) => theme.background.gray};
    border: 1px solid transparent;
    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${({ theme }) => theme.border.default};
    }
  }
  textarea {
    background: ${({ theme }) => theme.background.content};
    border: none;
    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${({ theme }) => theme.border.default};
    }
  }
  .ant-select-selection__clear {
    background-color: transparent;
    color: white;
    border-radius: 5px;
  }
  .ant-select-arrow-icon {
    background-color: transparent;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .ant-modal-footer {
    border-top: 1px solid ${({ theme }) => theme.background.container};
  }

  .ant-modal-body {
    padding: 10px 24px;
  }

  .ant-tabs-bar {
    font-weight: 500;
  }
  .ant-tabs-nav {
    .ant-tabs-tab {
      padding-bottom: 5px;
    }
  }
  .ant-tabs-tab {
    font-family: Roboto;
    color: ${({ theme }) => theme.text.tabTitle};
  }
  .ant-list {
    margin-top: 20px;
    overflow: auto;
    max-height: 460px;
  }
  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar-track {
    position: absolute;
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  .ant-list-split .ant-list-item {
    border-bottom: none;
    padding: 1px 0px;
  }
  .ant-list-empty-text {
    color: ${({ theme }) => theme.text.empty};
  }
  .modalTitleContent {
    background: ${({ theme }) => theme.background.gray};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.border.default};
    .modalBtnBack {
      margin: 0px 24px;
      color: ${({ theme }) => theme.drawer.closeIcon};
    }
    .modalTitle {
      flex: 1;
      padding-left: 24px;
      font-size: 24px;
      color: ${({ theme }) => theme.drawer.headerTitle};
    }
  }

  .ant-form-item {
  }
  .ant-form-item-control {
    line-height: 2;
  }
  .txtTitle {
    font-size: 12px;
  }
  .ant-form-item-label {
    line-height: 1.5em;
    padding-bottom: 5px;
  }
  .ant-input-number {
    width: 100%;
  }
  .txtTitleForm {
    color: ${({ theme }) => theme.text.formLabel};
    font-size: 12px;
  }
`;
