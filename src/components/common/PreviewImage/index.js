import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { getImageUrl } from 'utils/tools';
import { PreviewWrapper } from './styles';

const PreviewImage = ({ src, onPreview }) => {
  const [previewVisible, setPreviewVisible] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const handleCancel = () => {
    setPreviewVisible(null);
  };

  const onPreviewUI = (item) => {
    if (onPreview) {
      onPreview(item);
    } else {
      setPreviewVisible(true);
      setPreviewImage(item);
    }
  };
  return src ? (
    <PreviewWrapper>
      <img className="image" src={getImageUrl(src)} alt={src} />
      <div className="overlay">
        <EyeOutlined onClick={() => onPreviewUI(src)} />
      </div>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{ width: '100%' }}
          src={getImageUrl(previewImage)}
        />
      </Modal>
    </PreviewWrapper>
  ) : null;
};
PreviewImage.propTypes = {
  src: PropTypes.string,
  onPreview: PropTypes.func,
};

export default PreviewImage;
