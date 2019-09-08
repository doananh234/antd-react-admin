import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Upload, Modal, Icon } from 'antd';
import { xor } from 'lodash';
import i18next from 'i18next';
import FormItem from '../FormItem';
import { getRecordData } from '../../../utils/tools';
import { getUrl, uploadMedia } from '../../../api/uploadMedia';
import { FormMultiUploadWrapper } from './styles';
import UploadImage from '../../../assets/images/upload.png';
import UploadImageItem from './UploadImageItem';

const { Dragger } = Upload;

export const RestUpload = ({ defaultSourceKey, ...props }) => {
  const [disabled, setDisabled] = useState(false);
  const [defaultImage, setDefaultImage] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = file => {
    setPreviewVisible(true);
    setPreviewImage(file.url || file.thumbUrl);
  };

  const deleteImage = item => {
    const results = xor(fileList, [item]);
    setFileList(results);
    results.length === 0 && setDisabled(false);
    props.form &&
      props.form.setFieldsValue({
        [props.source]: results.map(e => e.url || e.response),
      });
  };

  const onMouseEnter = () => {
    setDisabled(true);
  };

  const onMouseLeave = () => {
    setDisabled(false);
  };

  const onSetDefault = item => {
    defaultSourceKey && setDefaultImage(item.url || item.response);
    defaultSourceKey &&
      props.form &&
      props.form.setFieldsValue({
        [defaultSourceKey]: item.url || item.response,
      });
  };

  const handleChange = e => setFileList(e.fileList);
  const uploadButton =
    fileList && fileList.length === 0 ? (
      <div className="uploadArea">
        <Icon type="plus" />
        <div className="ant-upload-text">
          Upload 
          {' '}
          {props.placeholder && i18next.t(props.placeholder)}
        </div>
      </div>
    ) : null;

  useEffect(() => {
    setFileList(
      props.defaultValue || getRecordData(props.record, props.source)
        ? makeFileList(props.defaultValue || getRecordData(props.record, props.source))
        : []
    );
    defaultSourceKey && onSetDefault({ url: getRecordData(props.record, defaultSourceKey) });
    setPreviewImage(makeFileList(props.defaultValue || getRecordData(props.record, props.source)));
  }, [defaultSourceKey, props.defaultValue, props.record, props.record.id, props.source]);

  const customRequest = async ({ onSuccess, file }) => {
    const responseS3 = await getUrl(file.name, file.type);
    const response = await uploadMedia(responseS3.uploadUrl, file);
    if (response) {
      onSuccess(response, file);
    }
  };

  const onChangeUpload = e => {
    if (fileList.length === 0) {
      onSetDefault(e.fileList[0]);
    }
    handleChange({ fileList: e.fileList });
    const formattedData = e.fileList.map(data => (data && data.response) || data.url);
    setPreviewImage(formattedData);
    props.onChange && props.onChange(formattedData);
    props.form &&
      props.form.setFieldsValue({
        [props.source]: formattedData,
      });
    if (defaultSourceKey && formattedData.indexOf(defaultImage) === -1) {
      onSetDefault(e.fileList[0]);
    }
  };

  return (
    <Fragment>
      {props.form && defaultSourceKey && (
        <FormItem
          {...props}
          required={false}
          source={defaultSourceKey}
          defaultValue={props.defaultValue || getRecordData(props.record, defaultSourceKey)}
        >
          <input style={{ display: 'none' }} />
        </FormItem>
      )}
      <FormMultiUploadWrapper>
        {props.form && (
          <FormItem
            {...props}
            required={false}
            ruleType="array"
            defaultValue={props.defaultValue || getRecordData(props.record, props.source)}
          >
            <input style={{ display: 'none' }} />
          </FormItem>
        )}
        <Dragger
          customRequest={customRequest}
          // action={`${process.env.REACT_APP_UPLOAD_PHOTO_URL}`}
          // headers={{
          //   'x-requested-with': undefined,
          //   Authorization: `Client-ID ${process.env.REACT_APP_UPLOAD_PHOTO_KEY}`,
          // }}
          accept="image/*"
          multiple={props.multiple}
          disabled={props.disabled || disabled}
          listType="picture-card"
          fileList={fileList}
          showUploadList={false}
          onPreview={handlePreview}
          onChange={onChangeUpload}
        >
          <div className="selectedImage">
            {fileList.map(img => (
              <UploadImageItem
                defaultSourceKey={defaultSourceKey}
                onSetDefault={onSetDefault}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                deleteImage={deleteImage}
                onPreviewUI={handlePreview}
                item={img}
                alt="upload.png"
                isDefault={
                  defaultImage && (defaultImage === img.url || img.response === defaultImage)
                }
              />
            ))}
            {uploadButton}
            <div className="overlayImage">
              <img src={UploadImage} alt="upload.png" />
            </div>
          </div>
        </Dragger>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </FormMultiUploadWrapper>
    </Fragment>
  );
};

const makeFileList = values =>
  Array.isArray(values)
    ? values.map(value =>
        value && value.url
          ? value
          : {
              uid: value,
              name: value,
              status: 'done',
              url: value,
            }
      )
    : [];

RestUpload.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
  multiple: PropTypes.bool,
  form: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  defaultSourceKey: PropTypes.string,
};

RestUpload.defaultProps = {
  multiple: true,
};

export default RestUpload;
