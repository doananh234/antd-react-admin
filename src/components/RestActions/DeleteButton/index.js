import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Tooltip } from 'antd';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

const { confirm } = Modal;

// eslint-disable-next-line no-unused-vars
const DeleteButton = ({ deleteItem, record, source, resource }) => {
  const handleDelete = () => {
    confirm({
      title: `${I18n.t('popup.alertDelete')} ${I18n.t(`${resource}.title`)}`,
      content: I18n.t('popup.alertDeleteDes', {
        customMessage: `${record.name}`,
      }),
      okText: I18n.t('button.ok'),
      cancelText: I18n.t('button.cancel'),
      onOk: () => deleteItem(record.id),
      onCancel: () => {},
    });
  };

  return (
    <Tooltip title={I18n.t('button.delete')}>
      <ButtonWrapper icon="delete" onClick={handleDelete} />
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
