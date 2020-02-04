import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import {
  Upload,
  Avatar,
  Progress,
  Form,
  Input,
  Icon,
  notification,
} from 'antd';
import I18n from 'i18next';
import AvatarCropperModal from './AvatarCropperModal';
import UploadImageWrapper from './style';
import { del } from '../../../api/utils';
import user from '../../../assets/images/user.png';
import { getUrl, uploadMedia } from '../../../api/uploadMedia';

const uploadUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1/upload`;
const FormItem = Form.Item;

// const confirm = Modal.confirm;

class UploadImage extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (
      get(nextProps.record, nextProps.source) !== prevState.prevRecordImgSource
    ) {
      return {
        prevRecordImgSource: get(nextProps.record, nextProps.source),
        imgDisplay:
          get(nextProps.record, nextProps.source) || nextProps.defaultValue,
      };
    }
    return {};
  };

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      // eslint-disable-next-line
      prevRecordImgSource:
        get(this.props.record, this.props.source) || undefined,
      imgDisplay: get(this.props.record, this.props.source) || undefined,
      loading: false,
      loadingProgress: 0,
      isShowCropperModal: false,
      hasErr: false,
    };
  }

  // componentDidMount() {
  //   window.addEventListener('beforeunload', this.onUnload);
  //   // this.onLoad();
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('beforeunload', this.onUnload);
  // }

  // onLoad = () => {
  //   const getUrl = localStorage.getItem('url');
  //   if (getUrl) {
  //     this.onRemove(getUrl);
  //   }
  // };

  onUnload = e => {
    if (this.state.imgDisplay && this.props.form) {
      localStorage.setItem('url', this.state.imgDisplay);
      // eslint-disable-next-line
      e.returnValue = '';
    }
  };

  onHideCropperModal = () => {
    this.setState({
      isShowCropperModal: false,
    });
  };

  onChangePreview = async ({ croppedFile }) => {
    try {
      const { onChange, source, form } = this.props;
      if (this.state.imgDisplay) {
        this.onRemove(this.state.imgDisplay);
      }
      this.setState({
        isShowCropperModal: false,
        loading: true,
      });

      const responseS3 = await getUrl(croppedFile.name, croppedFile.type);
      const response = await uploadMedia(responseS3.uploadUrl, croppedFile);
      this.setState({
        imgDisplay: response.url,
        loading: false,
        hasErr: false,
      });
      onChange && onChange(source, response.url);
      form &&
        form.setFieldsValue({
          [source]: response.url,
        });
      return response;
    } catch (error) {
      notification.error({
        title: 'Error',
        message:
          error && error.message
            ? error.message
            : 'Server Internall Error. Please try later !!!!',
        position: 'tr',
        autoDismiss: 15,
      });
      this.setState({
        file: null,
        imgDisplay: null,
        loading: false,
        hasErr: true,
        loadingProgress: 0,
      });
      return error;
    }
  };

  onRemove = url => {
    del('/deleteFile', { url });
    this.setState({
      file: null,
      imgDisplay: null,
      loading: false,
      loadingProgress: 0,
    });
    localStorage.removeItem('url');
  };

  renderImage() {
    const { style, defaultText, defaultIcon, defaultValue } = this.props;
    const { loading, imgDisplay, hasErr } = this.state;
    if (loading) {
      return (
        <Avatar style={style}>
          <Progress percent={this.state.loadingProgress} showInfo={false} />
          <div className="ant-upload-text">Uploading....</div>
        </Avatar>
      );
    }
    if (!imgDisplay) {
      return (
        <Avatar
          icon={defaultIcon}
          src={(!defaultText && user) || defaultValue}
          style={style}
        >
          <span className="default-image">{defaultText}</span>
        </Avatar>
      );
    }

    if (!hasErr) {
      return <Avatar src={imgDisplay} style={style} />;
    }

    return (
      <Avatar src={imgDisplay} style={style}>
        <Progress
          percent={this.state.loadingProgress}
          showInfo={false}
          status="exception"
        />
        <div className="ant-upload-text">Upload Failed</div>
      </Avatar>
    );
  }

  render() {
    const {
      hasCrop,
      form,
      source,
      style,
      className,
      label,
      defaultValue,
      cropDimension,
      header,
    } = this.props;
    const { imgDisplay } = this.state;
    const props = {
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: file => {
        this.setState(() => ({
          file,
          isShowCropperModal: hasCrop,
        }));
        if (!hasCrop) {
          this.onChangePreview({ croppedFile: file });
        }
        return false;
      },
    };

    return (
      <UploadImageWrapper className={className}>
        <FormItem label={label}>
          {form &&
            form.getFieldDecorator(source, {
              initialValue: imgDisplay || defaultValue,
            })(<Input style={{ display: 'none' }} />)}
          <Upload {...props} accept="image/*">
            <div className="image-uploader">
              {this.renderImage()}
              <div className="image-hover" style={style}>
                <Icon type="camera" className="image-hover-icon" />
              </div>
            </div>
          </Upload>
          <AvatarCropperModal
            cropDimension={cropDimension}
            isShowModal={this.state.isShowCropperModal}
            onHideModal={this.onHideCropperModal}
            onChangePreview={this.onChangePreview}
            image={this.state.file}
          />
        </FormItem>
        {header && <div className="header">{I18n.t(header)}</div>}
      </UploadImageWrapper>
    );
  }
}

UploadImage.propTypes = {
  showErrorMsg: PropTypes.func,
  form: PropTypes.object,
  source: PropTypes.string,
  record: PropTypes.object,
  style: PropTypes.object,
  defaultText: PropTypes.string,
  defaultIcon: PropTypes.string,
  onUploadImage: PropTypes.func,
  className: PropTypes.string,
  cropDimension: PropTypes.object,
  hasCrop: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  header: PropTypes.string,
};

UploadImage.defaultProps = {
  hasCrop: true,
};

export default UploadImage;
