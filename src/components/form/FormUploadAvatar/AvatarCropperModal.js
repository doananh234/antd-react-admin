import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import AvatarEditor from 'react-avatar-editor';
import { Modal, Button } from 'antd';

export default class AvatarCropper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      preview: null,
    };
  }

  setEditorRef(editor) {
    if (editor) this.editor = editor;
  }

  handleSave() {
    const { image } = this.props;
    this.editor.getImageScaledToCanvas().toBlob(croppedFile => {
      // eslint-disable-next-line
      croppedFile.name = image.name;
      this.props.onChangePreview({
        croppedFile,
      });
    }, image.type);
  }

  handleScale(e) {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  }

  handleXPosition(e) {
    const { position } = this.state;
    const x = parseFloat(e.target.value);
    this.setState({ position: { ...position, x } });
  }

  handleYPosition(e) {
    const { position } = this.state;
    const y = parseFloat(e.target.value);
    this.setState({ position: { ...position, y } });
  }

  handlePositionChange(position) {
    this.setState({ position });
  }

  render() {
    return (
      <div>
        <div className="static-modal">
          <Modal
            visible={this.props.isShowModal}
            onCancel={this.props.onHideModal}
            className="avatar-editor-modal"
            header="Edit Avatar"
            bodyStyle={{ textAlign: 'center' }}
            footer={[
              <Button
                className="btn-fill btn-wd"
                type="primary"
                onClick={() => this.handleSave()}
                key="saveBtn"
              >
                {I18n.t('button.save')}
              </Button>,
            ]}
          >
            <AvatarEditor
              ref={editor => this.setEditorRef(editor)}
              width={250}
              height={250}
              border={50}
              color={[0, 0, 0, 0.6]} // RGBA
              scale={parseFloat(this.state.scale)}
              rotate={0}
              borderRadius={125}
              onPositionChange={p => this.handlePositionChange(p)}
              // onImageChange={() => this.handleSave()}
              image={this.props.image}
            />
            <br />
            Zoom:
            <div className="zoom-div">
              <input
                name="scale"
                type="range"
                onChange={e => this.handleScale(e)}
                min="1"
                max="2"
                step="0.01"
                defaultValue="1"
              />
            </div>
          </Modal>
        </div>
        {!!this.state.preview && (
          <img
            src={this.state.preview.img}
            style={{
              borderRadius: `${(Math.min(this.state.preview.height, this.state.preview.width) +
                10) *
                (this.state.preview.borderRadius / 2 / 100)}px`,
            }}
            alt=""
          />
        )}
      </div>
    );
  }
}

AvatarCropper.propTypes = {
  onChangePreview: PropTypes.func,
  image: PropTypes.object,
  isShowModal: PropTypes.bool,
  onHideModal: PropTypes.func,
};
