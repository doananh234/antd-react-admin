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
);

export const loginAction = params => makeActionCreator(AuthTypes.LOGIN, { params });
export const loginSuccessAction = (data) => makeActionCreator(AuthTypes.LOGIN_AUTH_SUCCESS, {data});
export const loginFailureAction = error => makeActionCreator(AuthTypes.LOGIN_AUTH_FAIL, { error });
export const logout = () => makeActionCreator(AuthTypes.LOGOUT);

export const getCurentUser = () => makeActionCreator(AuthTypes.GET_CURRENT_USER);
export const getCurentUserSuccess = data =>
  makeActionCreator(AuthTypes.GET_CURRENT_USER_SUCCESS, { data });
export const getCurentUserFailure = error =>
  makeActionCreator(AuthTypes.GET_CURRENT_USER_FAILURE, { error });

export const updateUser = params => makeActionCreator(AuthTypes.UPDATE_USER, { params });
export const updateUserSuccess = data =>
  makeActionCreator(AuthTypes.UPDATE_USER_SUCCESS, { data });
export const updateUserFailure = data =>
  makeActionCreator(AuthTypes.UPDATE_USER_FAILURE, { data });

export const updateInstallation = params =>
makeActionCreator(AuthTypes.UPDATE_INSTALLATION, { params });
export const updateInstallationSuccess = payload =>
makeActionCreator(AuthTypes.UPDATE_INSTALLATION_SUCCESS, { payload });
export const updateInstallationFailure = error =>
makeActionCreator(AuthTypes.UPDATE_INSTALLATION_FAILURE, { error });

