import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const AuthTypes = makeConstantCreator(
  'LOGIN',
  'LOGIN_AUTH_FAIL',
  'LOGIN_AUTH_SUCCESS',
  'LOGOUT',

  'GET_CURRENT_USER',
  'GET_CURRENT_USER_SUCCESS',
  'GET_CURRENT_USER_FAILURE',

  'UPDATE_USER',
  'UPDATE_USER_SUCCESS',
  'UPDATE_USER_FAILURE',

  'UPDATE_INSTALLATION',
  'UPDATE_INSTALLATION_SUCCESS',
  'UPDATE_INSTALLATION_FAILURE',

  'FORGOT_PASSWORD',
  'FORGOT_PASSWORD_SUCCESS',
  'FORGOT_PASSWORD_FAILURE',

  'RESET_PASSWORD',
  'RESET_PASSWORD_SUCCESS',
  'RESET_PASSWORD_FAILURE',

  'GET_MY_TASKS',
  'GET_MY_TASKS_SUCCESS',
  'GET_MY_TASKS_FAILURE',

  'REGISTER',
  'REGISTER_WITH_TOKEN',
  'REGISTER_SUCCESS',
  'REGISTER_FAILURE'
);

export const registerAction = params => makeActionCreator(AuthTypes.REGISTER, { params });
export const registerWithTokenAction = params =>
  makeActionCreator(AuthTypes.REGISTER_WITH_TOKEN, { params });
export const registerSuccessAction = data =>
  makeActionCreator(AuthTypes.REGISTER_SUCCESS, { data });
export const registerFailureAction = error =>
  makeActionCreator(AuthTypes.REGISTER_FAILURE, { error });

export const loginAction = params => makeActionCreator(AuthTypes.LOGIN, { params });
export const loginSuccessAction = data => makeActionCreator(AuthTypes.LOGIN_AUTH_SUCCESS, { data });
export const loginFailureAction = error => makeActionCreator(AuthTypes.LOGIN_AUTH_FAIL, { error });
export const logout = () => makeActionCreator(AuthTypes.LOGOUT);

export const getCurentUser = () => makeActionCreator(AuthTypes.GET_CURRENT_USER);
export const getCurentUserSuccess = data =>
  makeActionCreator(AuthTypes.GET_CURRENT_USER_SUCCESS, { data });
export const getCurentUserFailure = error =>
  makeActionCreator(AuthTypes.GET_CURRENT_USER_FAILURE, { error });

export const updateUser = params => makeActionCreator(AuthTypes.UPDATE_USER, { params });
export const updateUserSuccess = data => makeActionCreator(AuthTypes.UPDATE_USER_SUCCESS, { data });
export const updateUserFailure = data => makeActionCreator(AuthTypes.UPDATE_USER_FAILURE, { data });

export const updateInstallation = params =>
  makeActionCreator(AuthTypes.UPDATE_INSTALLATION, { params });
export const updateInstallationSuccess = payload =>
  makeActionCreator(AuthTypes.UPDATE_INSTALLATION_SUCCESS, { payload });
export const updateInstallationFailure = error =>
  makeActionCreator(AuthTypes.UPDATE_INSTALLATION_FAILURE, { error });

export const forgotPassword = email => makeActionCreator(AuthTypes.FORGOT_PASSWORD, { email });
export const forgotPasswordSuccess = () => makeActionCreator(AuthTypes.FORGOT_PASSWORD_SUCCESS);
export const forgotPasswordFailure = error =>
  makeActionCreator(AuthTypes.FORGOT_PASSWORD_FAILURE, { error });

export const resetPassword = (password, resetPasswordToken) =>
  makeActionCreator(AuthTypes.RESET_PASSWORD, { password, resetPasswordToken });
export const resetPasswordSuccess = () => makeActionCreator(AuthTypes.RESET_PASSWORD_SUCCESS);
export const resetPasswordFailure = error =>
  makeActionCreator(AuthTypes.RESET_PASSWORD_FAILURE, { error });
