import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Dropdown, Menu } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { getRecordData } from 'utils/tools';
import { SelectFieldWrapper } from './style';

class SelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const {
      onChange,
      resourceData,
      valueProps,
      textProps,
      value,
      record,
      source,
    } = this.props;
    const menu = (
      <Menu
        onClick={(e) => {
          onChange && onChange(e);
          this.setState({ visible: false });
        }}
      >
        {map(resourceData, (item) => (
          <Menu.Item key={valueProps ? item[valueProps] : item}>
            {getRecordData(item, textProps)}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Dropdown
        overlay={menu}
        trigger={['click']}
        ref={(dropDown) => {
          this.refDropDown = dropDown;
        }}
        onVisibleChange={(visible) => this.setState({ visible })}
      >
        <SelectFieldWrapper>
          <span role="presentation">
            <div>{value || getRecordData(record, source)}</div>
            <div className={`icon ${this.state.visible && 'openDropdown'}`}>
              <RightOutlined />
            </div>
          </span>
        </SelectFieldWrapper>
      </Dropdown>
    );
  }
}

SelectField.propTypes = {
  onChange: PropTypes.func,
  valueProps: PropTypes.string,
  textProps: PropTypes.string,
  resourceData: PropTypes.array,
  value: PropTypes.any,
  record: PropTypes.object,
  source: PropTypes.string,
};

SelectField.defaultProps = {};
export default SelectField;
