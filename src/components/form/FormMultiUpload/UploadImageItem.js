import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import {
  DeleteOutlined,
  EyeOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { getImageUrl } from 'utils/tools';

const UploadImageItem = ({
  defaultSourceKey,
  onSetDefault,
  onMouseEnter,
  onMouseLeave,
  item,
  onPreviewUI,
  deleteImage,
  isDefault,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="uploadImage"
  >
    {item.status !== 'done' && <LoadingOutlined className="loading" />}
    <img
      className="image"
      src={getImageUrl(item.url || item.response)}
      alt={item.url}
    />
    <div className="overlay">
      <EyeOutlined
        onClick={() => onPreviewUI({ ...item, url: item.url || item.response })}
      />
      <DeleteOutlined onClick={() => deleteImage(item)} />
    </div>
    {defaultSourceKey ? (
      <div
        role="presentation"
        onClick={() => onSetDefault(item)}
        className={`lbSetDefault  ${isDefault ? 'active' : ''}`}
      >
        {i18next.t('button.setDefault')}
      </div>
    ) : null}
  </div>
);
UploadImageItem.propTypes = {
  item: PropTypes.object,
  onPreviewUI: PropTypes.func,
  deleteImage: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onSetDefault: PropTypes.func,
  defaultSourceKey: PropTypes.string,
  isDefault: PropTypes.bool,
};

export default UploadImageItem;
