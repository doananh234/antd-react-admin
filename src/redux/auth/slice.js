import { createSlice, createAction } from '@reduxjs/toolkit';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('sessionToken'),
  // isAuthenticated: true,
  data: {
    fullName: localStorage.getItem('fullName') || '',
    id: localStorage.getItem('id'),
  },
  roles: '',
  loginError: false,
  loginSuccess: false,
};

const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loginSuccess: state => {
      state.isAuthenticated = true;
      state.loginError = false;
      state.loginSuccess = true;
    },

    logout: state => {
      state.isAuthenticated = false;
    },
    loginFail: (state, { payload }) => {
      state.isAuthenticated = false;
      state.loginError = payload;
      state.loginSuccess = false;
    },
    getCurentUserSuccess: (state, { payload }) => {
      state.data = payload;
    },
    getCurentUserFailure: (state, { payload }) => {
      state.error = payload;
    },
    updateUser: state => {
      state.loading = true;
    },
    updateUserSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    updateUserFailure: state => {
      state.loading = false;
    },
    forgotPassword: state => {
      state.loading = true;
    },
    forgotPasswordSuccess: state => {
      state.loading = false;
    },
    forgotPasswordFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    resetPasswordSuccess: state => {
      state.loading = false;
    },
    resetPasswordFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    registerSuccess: state => {
      state.isAuthenticated = true;
      state.loginError = false;
      state.loginSuccess = true;
    },
    registerFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const registerWithToken = createAction('Auth/registerWithToken');
export const register = createAction('Auth/register');
export const resetPassword = createAction('Auth/resetPassword');
export const login = createAction('Auth/login');
export const getCurentUser = createAction('Auth/getCurentUser');

export const {
  loginSuccess,
  logout,
  loginFail,
  updateUser,
  updateUserFailure,
  updateUserSuccess,
  getCurentUserFailure,
  getCurentUserSuccess,
  resetPasswordFailure,
  resetPasswordSuccess,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  forgotPassword,
  registerFail,
  registerSuccess,
} = actions;

export default reducer;
