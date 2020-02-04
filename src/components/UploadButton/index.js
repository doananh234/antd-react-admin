import React from 'react';
import { Icon } from 'antd';

const UploadButton = () => (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
  </div>
);
UploadButton.propTypes = {};
export default UploadButton;
