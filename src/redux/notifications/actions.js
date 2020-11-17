import firebase from 'firebase';
import { notification } from 'antd';
import { getNotificationCountApi } from 'api/notifications';
import { handleFirebaseMessage } from 'api/firebase';
import { putApi } from 'api/crud';
import { apiWrapper } from 'utils/reduxUtils';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { makeActions } from 'redux/crudCreator';

export const updateNotifications = createAction('updateNotifications');
export const notificationsActions = makeActions('notifications');

export const getNotificationCount = createAsyncThunk(
  'notifications/getNotificationCount',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, getNotificationCountApi);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const seenNotification = createAsyncThunk(
  'notifications/seenNotification',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        { isShowProgress: false, isShowSuccessNoti: false },
        putApi,
        'notifications',
        payload.id,
        { isSeen: payload.isSeen },
      );
      thunkAPI.dispatch(getNotificationCount());
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const updateInstallations = createAsyncThunk(
  'notifications/updateInstallations',
  async (payload, thunkAPI) => {
    try {
      const locale = localStorage.getItem('i18nextLng');
      const userId = thunkAPI.getState().auth.data.id;
      const requestParams = {
        // ...(businessId && { businessId }),
        firebaseToken: payload,
        deviceType: 'web',
        userId,
        locale,
      };
      await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/installations`, {
        method: 'POST',
        body: JSON.stringify(requestParams),
      });
      return {};
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const watchFirebaseNotifications = createAsyncThunk(
  'notifications/watchFirebaseNotifications',
  async ({ seenNotification }, thunkAPI) => {
    try {
      const response = await firebase.messaging().getToken();
      thunkAPI.dispatch(updateInstallations(response));
      handleFirebaseMessage(response => {
        const receivedNotification = {
          ...response.notification,
          createdAt: response?.data?.createdAt,
          body: JSON.parse(response.notification.body),
        };
        thunkAPI.dispatch(
          updateNotifications({
            id: receivedNotification?.body?.notificationId,
            message: receivedNotification?.body?.message,
            title: receivedNotification?.title,
            isSeen: false,
            prescriptionId: receivedNotification?.body?.prescriptionId,
            createdAt: receivedNotification?.createdAt,
          }),
        );
        notification.open({
          message: receivedNotification.title,
          description: receivedNotification?.body?.message,
          duration: 2.5,
          onClick: () => {
            seenNotification({
              id: receivedNotification?.body?.notificationId,
              isSeen: true,
            });
            // history.push(
            //   `/prescriptions#prescriptions/${receivedNotification?.body?.prescriptionId}/edit`,
            // );
          },
        });
      });
      return {};
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);
