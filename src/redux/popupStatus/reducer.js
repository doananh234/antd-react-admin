import { PopupStatusTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const initialState = {
  popupStatus: {},
};

const togglePopup = (state, { popupName }) => ({
  ...state,
  popupStatus: {
    ...state.popupStatus,
    [popupName]: !state.popupStatus[popupName],
  },
});

export const popupStatus = makeReducerCreator(initialState, {
  [PopupStatusTypes.TOGGLE]: togglePopup,
});
