import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

class EditButton extends Component {
  state = {
    visible: false,
  };

  onOk = () => {
    this.setState({ visible: false });
    const { deleteItem, record, source } = this.props;
    return new Promise((resolve, reject) => {
      setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      deleteItem(record.id);
    }).catch(() => {
      console.log('Oops errors!', source);
    });
  };

  onCancel = () => {
    this.setState({ visible: false });
  };

  handleDelete = () => {
    this.setState({ visible: true });
  };

  render() {
    const { record } = this.props;
    return (
      <div>
        {/* <Tooltip title={<IntlMessages id="tooltip.delete" />}> */}
        <ButtonWrapper icon="delete" onClick={this.handleDelete}>
          {I18n.t('button.delete')}
        </ButtonWrapper>
        {/* </Tooltip> */}
        <Modal
          visible={this.state.visible}
          onOk={this.onOk}
          onCancel={this.onCancel}
          okText={I18n.t('button.ok')}
          cancelText={I18n.t('button.cancel')}
        >
          <span>
            {I18n.t('text.alertDelete')}
            {`(#${record.id})?`}
          </span>
        </Modal>
      </div>
    );
  }
}

EditButton.propTypes = {
  deleteItem: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
};

EditButton.defaultProps = {
  source: 'delete',
};

export default EditButton;
