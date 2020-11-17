import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

const { confirm } = Modal;

// eslint-disable-next-line no-unused-vars
const DeleteButton = ({ deleteItem, record, source, resource }) => {
  const handleDelete = () => {
    confirm({
      title: `${I18n.t('popup.alertDelete')} ${I18n.t(`${resource}.header`)}`,
      content: I18n.t('popup.alertDeleteDes', {
        customMessage: `${record.id}`,
      }),
      okText: I18n.t('button.ok'),
      cancelText: I18n.t('button.cancel'),
      onOk: () => deleteItem(record.id, record),
      onCancel: () => {},
    });
  };

  return (
    <Tooltip title={I18n.t('button.delete')}>
      <ButtonWrapper
        type="primary"
        danger
        icon={<DeleteOutlined />}
        onClick={handleDelete}
      />
    </Tooltip>
  );
};

DeleteButton.propTypes = {
  deleteItem: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
  resource: PropTypes.string,
};

DeleteButton.defaultProps = {
  source: 'delete',
};

export default DeleteButton;
