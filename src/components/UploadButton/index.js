import React from 'react';
import { UploadOutlined } from '@ant-design/icons';

const UploadButton = () => (
  <div>
    <UploadOutlined />
    <div className="ant-upload-text">Upload</div>
  </div>
);
UploadButton.propTypes = {};
export default UploadButton;
