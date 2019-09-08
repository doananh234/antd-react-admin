import React from 'react';
import { ModalWrapper } from './styles';

const Modal = props => <ModalWrapper destroyOnClose closable={false} {...props} />;
Modal.propTypes = {};

export default Modal;
