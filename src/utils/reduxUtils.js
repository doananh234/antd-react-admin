import { notification } from 'antd';
import { call, put, fork, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import I18n from 'i18next';
import _ from 'lodash';
import { logout } from '../redux/auth/actions';
// import { logout } from './login/actions';

const ERROR_CODE = [401];

export function makeConstantCreator(...params) {
  const constant = {};
  _.each(params, param => {
    constant[param] = param;
  });
  return constant;
}

export const makeActionCreator = (type, params = null) => ({ type, ...params });

export const makeReducerCreator = (initialState = null, handlers = {}) => (
  state = initialState,
  action
) => {
  if (!action && !action.type) return state;
  const handler = handlers[action.type];
  return (handler && handler(state, action)) || state;
};

export function* apiWrapper(
  config = { isShowProgress: true, isShowSuccessNoti: false },
  apiFunc,
  ...params
) {
  try {
    const response = yield call(apiFunc, ...params);
    yield fork(checkError, response);
    notification.destroy();
    config.isShowSuccessNoti &&
      notification.success({
        message: I18n.t('success.title'),
        description: I18n.t('success.description'),
      });
    return response;
  } catch (err) {
    notification.destroy();
    notification.error({
      message: I18n.t('error.title'),
      description: err.message || I18n.t('error.description'),
    });
    yield fork(checkError, err);
    throw new Error(err);
  }
}

export function* checkError(res) {
  const auth = yield select(state => state.auth);
  if (res.code === 401 && auth.isAuthenticated) {
    yield put(logout());
  }
  if (ERROR_CODE.indexOf(res.code) > -1) {
    yield put(push(`/error/${res.code}`));
  }
}
