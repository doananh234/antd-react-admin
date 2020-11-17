import { makeCRUDSlice } from '../crudCreator/slice';
import { updateNotifications, notificationsActions } from './actions';

export const RESOURCE = 'notifications';
export const slice = makeCRUDSlice(RESOURCE, notificationsActions, {
  getNotificationCount: () => {},
  getNotificationCountSuccess: (state, { payload }) => {
    state.notSeen = payload;
  },
  getNotificationCountFailure: (state, { payload }) => {
    state.error = payload;
  },
  watchFirebaseNotifications: () => {},
  watchFirebaseNotificationsFailure: (state, { payload }) => {
    state.error = payload;
  },
  updateInstallations: () => {},
  updateInstallationsFailure: (state, { payload }) => {
    state.error = payload;
  },
  [updateNotifications]: (state, { payload }) => {
    state.notSeen += 1;
    state.ids = [payload.id, ...state.ids];
    state.data = {
      ...state.data,
      [payload.id]: payload,
    };
  },
  seenNotification: () => {},
  seenNotificationSuccess: (state, { payload }) => {
    state.data = {
      ...state.data,
      [payload]: {
        ...state.data[payload],
        isSeen: true,
      },
    };
  },
  seenNotificationFailure: (state, { payload }) => {
    state.error = payload;
  },
});

export const { reducer } = slice;

export default reducer;
