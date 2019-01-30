import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const PopupStatusTypes = makeConstantCreator('TOGGLE');

export const togglePopupAction = popupName =>
  makeActionCreator(PopupStatusTypes.TOGGLE, { popupName });
