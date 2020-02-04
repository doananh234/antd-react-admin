import React from 'react';
import { ModalWrapper } from './styles';

const Modal = props => <ModalWrapper closable={false} {...props} destroyOnClose />;

Modal.propTypes = {};

export default Modal;
