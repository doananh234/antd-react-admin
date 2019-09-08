import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import I18n from 'i18next';
import { ButtonWrapper } from './styles';

const { confirm } = Modal;

class EditButton extends Component {
  onOk = () => {
    const { deleteItem, record } = this.props;
    deleteItem(record.id);
  };

  handleDelete = () => {
    const { record, source, resource } = this.props;
    confirm({
      title: `${I18n.t('popup.alertDelete')} ${I18n.t(`${resource}.title`)}`,
      content: I18n.t('popup.alertDeleteDes', { customMessage: `${record.name}` }),
      okText: I18n.t('button.ok'),
      cancelText: I18n.t('button.cancel'),
      onOk: () => {
        this.onOk(source);
      },
      onCancel: () => {},
    });
  };

  render() {
    return (
      <div>
        {/* <Tooltip header={<IntlMessages id="tooltip.delete" />}> */}
        <ButtonWrapper icon="delete" onClick={this.handleDelete}>
          {I18n.t('button.delete')}
        </ButtonWrapper>
        {/* </Tooltip> */}
      </div>
    );
  }
}

EditButton.propTypes = {
  deleteItem: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
  resource: PropTypes.string,
};

EditButton.defaultProps = {
  source: 'delete',
};

export default EditButton;
