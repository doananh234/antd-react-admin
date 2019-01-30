import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const ModalTypes = makeConstantCreator('SHOW_MODAL', 'CLOSE_MODAL');

export const showModal = data => makeActionCreator(ModalTypes.SHOW_MODAL, { data });
export const closeModal = data => makeActionCreator(ModalTypes.CLOSE_MODAL, { data });
