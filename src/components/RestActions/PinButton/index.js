import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

// eslint-disable-next-line no-unused-vars
const DeleteButton = ({ pinItem, record, source, resource }) => {
  const handlePin = () => {
    pinItem(record.id);
  };

  return (
    <Tooltip title={I18n.t(record.isPinned ? 'button.unPin' : 'button.pin')}>
      <ButtonWrapper
        icon={record.isPinned ? 'undo' : 'pushpin'}
        onClick={handlePin}
      />
    </Tooltip>
  );
};

DeleteButton.propTypes = {
  pinItem: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
  resource: PropTypes.string,
};

DeleteButton.defaultProps = {
  source: 'pin',
};

export default DeleteButton;
