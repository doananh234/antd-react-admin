import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
// import { Tooltip } from 'antd';
import { Tooltip } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { ButtonWrapper } from './styles';

const EditButton = ({ isView, ...props }) => {
  return (
    <Tooltip title={I18n.t(`button.${isView ? 'view' : 'edit'}`)}>
      <ButtonWrapper
        type="primary"
        source={props.source}
        icon={isView ? <EyeOutlined /> : <EditOutlined />}
        onClick={() => props.gotoEditPage(props.record ? props.record.id : '')}
      />
    </Tooltip>
  );
};

EditButton.propTypes = {
  gotoEditPage: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
  isView: PropTypes.bool,
};

EditButton.defaultProps = {
  source: 'edit',
};

export default EditButton;
