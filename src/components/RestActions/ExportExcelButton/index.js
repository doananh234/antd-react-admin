import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import { ButtonWrapper } from './styles';

const ExportExcelButton = props => (
  <Popover placement="bottomRight" trigger="click">
    <ButtonWrapper onClick={props.exportExcel}>
      <Icon type="ic-excel" />
    </ButtonWrapper>
  </Popover>
);
ExportExcelButton.propTypes = {
  exportExcel: PropTypes.func,
};

ExportExcelButton.defaultProps = {
  exportExcel: () => {},
};

export default ExportExcelButton;
