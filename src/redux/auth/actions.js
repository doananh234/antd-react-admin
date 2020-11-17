import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginApi,
  // deleteInstallationApi,
  updateCurrentUserApi,
  getCurrentUserApi,
  resetPasswordApi,
  forgotPasswordApi,
  registerApi,
  registerWithTokenApi,
  getPermissionsApi,
  subscribeUserApi,
  changePasswordApi,
} from 'api/user';
// import api
import { apiWrapper } from 'utils/reduxUtils';

export const login = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {
          isShowLoading: true,
          isShowSuccessNoti: false,
        },
        loginApi,
        payload,
      );
      if (response) {
        localStorage.setItem('sessionToken', response.token);
        localStorage.setItem('fullName', response.email);
        localStorage.setItem('id', response.id);
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {
          isShowLoading: true,
          isShowSuccessNoti: false,
        },
        registerApi,
        payload,
      );

      if (response.token) {
        localStorage.setItem('sessionToken', response.token);
        thunkAPI.dispatch(getCurrentUser());
        return response;
      }
      return thunkAPI.rejectWithValue();
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const registerWithToken = createAsyncThunk(
  'auth/registerWithToken',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {
          isShowLoading: true,
          isShowSuccessNoti: false,
        },
        registerWithTokenApi,
        payload,
      );

      if (response.token) {
        localStorage.setItem('sessionToken', response.token);
        thunkAPI.dispatch(getCurrentUser());
        return response;
      }
      return thunkAPI.rejectWithValue();
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper({}, getCurrentUserApi);
      return response;
      // eslint-disable-next-line
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, thunkAPI) => {
    try {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('fullName');
      localStorage.removeItem('id');
      window.location.href = '/';
      return {};
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const updateCurrentUser = createAsyncThunk(
  'auth/updateCurrentUser',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, updateCurrentUserApi, payload);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, forgotPasswordApi, payload);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, resetPasswordApi, payload);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const subscribeUser = createAsyncThunk(
  'auth/subscribeUser',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, subscribeUserApi, payload);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getPermissions = createAsyncThunk(
  'auth/getPermissions',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(null, getPermissionsApi, payload);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (payload, thunkAPI) => {
    try {
      const response = await apiWrapper(
        {
          isShowLoading: true,
          isShowSuccessNoti: true,
        },
        changePasswordApi,
        payload,
      );
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  },
);
