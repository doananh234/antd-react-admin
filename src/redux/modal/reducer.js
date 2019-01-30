import { ModalTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const initialState = {
  current: null,
};

const showModal = (state, { data }) => ({
  current: data,
});

const closeModal = () => ({
  current: null,
});

export default makeReducerCreator(initialState, {
  [ModalTypes.SHOW_MODAL]: showModal,
  [ModalTypes.CLOSE_MODAL]: closeModal,
});
