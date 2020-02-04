import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import I18n from 'i18next';
import CMSActions, { cleanCMSData } from 'redux/cms/actions';
import { Tooltip } from 'antd';
import { ButtonWrapper } from './styles';

const DuplicateButton = ({ source, record }) => {
  const dispatch = useDispatch();
  useEffect(
    () => () => {
      dispatch(cleanCMSData());
    },
    [dispatch],
  );
  const handleDuplicate = () => {
    const value = omit(record, [
      'backupContent',
      'createdAt',
      'updatedAt',
      'id',
      'backupId',
      'slug',
      'publishedAt',
      'isActive',
      'status',
    ]);
    dispatch(CMSActions.createCms(value, { isBack: false }));
  };
  return (
    <Tooltip title={I18n.t('button.duplicate')}>
      <ButtonWrapper source={source} icon="copy" onClick={handleDuplicate} />
    </Tooltip>
  );
};

DuplicateButton.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
};

DuplicateButton.defaultProps = {
  source: 'duplicate',
};

export default DuplicateButton;
