import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Upload, Avatar, Progress, Form, Input, Icon, notification } from 'antd';
import AvatarCropperModal from './AvatarCropperModal';
import UploadImageWrapper from './style';
import { getRecordData } from '../../../utils/tools';
import { del } from '../../../api/utils';
import user from '../../../assets/images/user.png';
import { getUrl, uploadMedia } from '../../../api/uploadMedia';

const uploadUrl = `${process.env.REACT_APP_SERVER_URL}/uploadFile`;
const FormItem = Form.Item;

// const confirm = Modal.confirm;

class UploadImage extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (getRecordData(nextProps.record, nextProps.source) !== prevState.prevRecordImgSource) {
      return {
        prevRecordImgSource: getRecordData(nextProps.record, nextProps.source),
        imgDisplay: getRecordData(nextProps.record, nextProps.source),
      };
    }
    return {};
  };

  state = {
    file: null,
    prevRecordImgSource: getRecordData(this.props.record, this.props.source) || undefined,
    imgDisplay: getRecordData(this.props.record, this.props.source) || undefined,
    loading: false,
    loadingProgress: 0,
    isShowCropperModal: false,
    hasErr: false,
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload);
    // this.onLoad();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload);
  }

  // onLoad = () => {
  //   const getUrl = localStorage.getItem('url');
  //   if (getUrl) {
  //     this.onRemove(getUrl);
  //   }
  // };

  onUnload = e => {
    if (this.state.imgDisplay && this.props.form) {
      localStorage.setItem('url', this.state.imgDisplay);
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
      if (this.state.imgDisplay) {
        this.onRemove(this.state.imgDisplay);
      }
      this.setState({
        isShowCropperModal: false,
        loading: true,
      });

      const responseS3 = await getUrl(croppedFile.name, croppedFile.type);
      const response = await uploadMedia(responseS3.url, croppedFile);
      this.setState({
        imgDisplay: response,
        loading: false,
        hasErr: false,
      });
    } catch (error) {
      this.props.showErrorMsg(error);
      notification.error({
        title: 'Error',
        message:
          error && error.message ? error.message : 'Server Internall Error. Please try later !!!!',
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
    }
    // const xhr = new XMLHttpRequest();
    // const fd = new FormData();
    // xhr.open('POST', uploadUrl);

    // xhr.upload.addEventListener('progress', e => {
    //   this.setState({
    //     loadingProgress: Math.round((e.loaded * 100) / e.total),
    //   });
    // });

    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     // File uploaded successfully
    //     const response = JSON.parse(xhr.responseText);
    //     if (response.Location) {
    //       this.setState({
    //         imgDisplay: response.Location,
    //         loading: false,
    //         hasErr: false,
    //       });
    //       this.props.form
    //         ? this.props.form.setFieldsValue({ [this.props.source]: response.Location })
    //         : this.props.onUploadImage(response.Location);
    //     }
    //   }
    //   if (xhr.readyState === 4 && xhr.status > 200) {
    //     // File uploaded fail
    //     const response = JSON.parse(xhr.responseText);
    //     this.props.showErrorMsg(response);
    //     notification.error({
    //       title: 'Error',
    //       message:
    //         response && response.message
    //           ? response.message
    //           : 'Server Internall Error. Please try later !!!!',
    //       position: 'tr',
    //       autoDismiss: 15,
    //     });
    //     this.setState({
    //       file: null,
    //       imgDisplay: null,
    //       loading: false,
    //       hasErr: true,
    //       loadingProgress: 0,
    //     });
    //   }
    // };
    // fd.append('file', croppedFile, croppedFile.name);
    // xhr.send(fd);
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
    const { style, defaultText, defaultIcon } = this.props;
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
        <Avatar icon={defaultIcon} src={!defaultText && user} style={style}>
          <span className="default-image">{defaultText}</span>
        </Avatar>
      );
    }

    if (!hasErr) {
      return <Avatar src={imgDisplay} style={style} />;
    }

    return (
      <Avatar src={imgDisplay} style={style}>
        <Progress percent={this.state.loadingProgress} showInfo={false} status="exception" />
        <div className="ant-upload-text">Upload Failed</div>
      </Avatar>
    );
  }

  render() {
    const { form, source, style } = this.props;
    const { imgDisplay } = this.state;
    const props = {
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: file => {
        this.setState(() => ({
          file,
          isShowCropperModal: true,
        }));
        return false;
      },
    };

    return (
      <UploadImageWrapper style={style}>
        <FormItem>
          {form &&
            form.getFieldDecorator(source, {
              initialValue: imgDisplay,
            })(<Input style={{ display: 'none' }} />)}
          <Upload {...props}>
            <div className="image-uploader">
              {this.renderImage()}
              <div className="image-hover" style={style}>
                <Icon type="camera" className="image-hover-icon" />
              </div>
            </div>
          </Upload>
          <AvatarCropperModal
            isShowModal={this.state.isShowCropperModal}
            onHideModal={this.onHideCropperModal}
            onChangePreview={this.onChangePreview}
            image={this.state.file}
          />
        </FormItem>
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
};

export default connect(
  () => ({}),
  {}
)(UploadImage);
