import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const AuthTypes = makeConstantCreator('LOGIN', 'LOGIN_AUTH_FAIL', 'LOGIN_AUTH_SUCCESS');

export const loginAction = params => makeActionCreator(AuthTypes.LOGIN, { params });
export const loginSuccessAction = () => makeActionCreator(AuthTypes.LOGIN_AUTH_SUCCESS);
