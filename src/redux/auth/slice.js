import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  login,
  logout,
  updateCurrentUser,
  forgotPassword,
  register,
  resetPassword,
} from './actions';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('sessionToken'),
  // isAuthenticated: true,
  data: {
    fullName: localStorage.getItem('fullName') || '',
    id: localStorage.getItem('id'),
  },
  role: null,
  loginError: false,
  loginSuccess: false,
  permissionData: null,
};

const { reducer } = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    getPermissionsSuccess: (state, { payload }) => {
      state.loading = false;
      state.permissionData = payload;
    },
    getPermissionsFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    subscribeUser: (state) => {
      state.loading = true;
    },
    subscribeUserSuccess: (state) => {
      state.loading = false;
    },
    subscribeUserFail: (state, { payload }) => {
      state.error = payload.error;
      state.loading = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.currentUser = payload;
      state.loginError = false;
      state.loginSuccess = true;
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state) => {
      state.loading = false;
    },
    [register.rejected]: (state) => {
      state.loading = false;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.role = payload.systemRoleName;
    },
    [logout.fulfilled]: (state) => {
      state.isAuth = false;
      state.currentUser = null;
    },
    [updateCurrentUser.pending]: (state) => {
      state.loading = true;
    },
    [updateCurrentUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = { ...state.data, ...payload };
    },
    [updateCurrentUser.rejected]: (state) => {
      state.loading = false;
    },
    [forgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state) => {
      state.loading = false;
    },
    [forgotPassword.rejected]: (state) => {
      state.loading = false;
    },
    [resetPassword.pending]: (state) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state) => {
      state.loading = false;
    },
    [resetPassword.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default reducer;
