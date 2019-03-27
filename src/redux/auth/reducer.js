import { AuthTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('sessionToken'),
  data: {
    fullName: localStorage.getItem('fullName') || '',
    id: localStorage.getItem('id'),
  },
  roles: '',
  loginError: false,
  loginSuccess: false,
};

const loginSuccess = state => ({
  ...state,
  isAuthenticated: true,
  loginError: false,
  loginSuccess: true,
});

const loginFail = (state, action) => ({
  ...state,
  isAuthenticated: false,
  loginError: action.error,
  loginSuccess: false,
});

const logout = () => ({ ...initialState, isAuthenticated: false });

const getCurentUserSuccess = (state, { data }) => ({
  ...state,
  data,
});

const getCurentUserFailure = (state, { error }) => ({
  ...state,
  error,
});

const updateUser = state => ({
  ...state,
  loading: true,
});

const updateUserSuccess = (state, action) => ({
  ...state,
  data: {
    ...state.data,
    ...action.data,
  },
  loading: false,
});

const updateUserFailure = state => ({
  ...state,
  loading: false,
});

const forgotPassword = state => ({
  ...state,
  loading: true,
});

const forgotPasswordSuccess = state => ({
  ...state,
  loading: false,
});

const forgotPasswordFailure = (state, { error }) => ({
  ...state,
  loading: false,
  error,
});

const resetPasswordSuccess = state => ({
  ...state,
  loading: false,
});

const resetPasswordFailure = (state, { error }) => ({
  ...state,
  loading: false,
  error,
});

export const auth = makeReducerCreator(initialState, {
  [AuthTypes.LOGIN_AUTH_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_AUTH_FAIL]: loginFail,
  [AuthTypes.LOGOUT]: logout,

  [AuthTypes.GET_CURRENT_USER_SUCCESS]: getCurentUserSuccess,
  [AuthTypes.GET_CURRENT_USER_FAILURE]: getCurentUserFailure,

  [AuthTypes.UPDATE_USER]: updateUser,
  [AuthTypes.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [AuthTypes.UPDATE_USER_FAILURE]: updateUserFailure,

  [AuthTypes.FORGOT_PASSWORD]: forgotPassword,
  [AuthTypes.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [AuthTypes.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure,

  [AuthTypes.RESET_PASSWORD_SUCCESS]: resetPasswordSuccess,
  [AuthTypes.RESET_PASSWORD_FAILURE]: resetPasswordFailure,
});
