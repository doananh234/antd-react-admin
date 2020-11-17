import { notification } from 'antd';
// import { push } from 'connected-react-router';
import I18n from 'i18next';
// eslint-disable-next-line
import { setLoading } from 'redux/loading/slice';
// eslint-disable-next-line
import { logout } from 'redux/auth/actions';
// import store from 'redux/store';
// import { logout } from './login/actions';

const ERROR_CODE = [];

export async function apiWrapper(
  config = { isShowProgress: true, isShowSuccessNoti: false },
  apiFunc,
  ...params
) {
  try {
    // yield put(setLoading(config.isShowLoading));
    const response = await apiFunc(...params);
    // yield put(setLoading(false));
    // yield fork(checkError, response);

    config?.isShowSuccessNoti &&
      notification.success({
        message: I18n.t('success.title'),
        description:
          response.message ||
          config.successDescription ||
          I18n.t('success.description'),
      });
    return response;
  } catch (err) {
    // yield put(setLoading(false));
    notification.destroy();
    notification.error({
      message: I18n.t('error.title'),
      description: err.message || I18n.t('error.description'),
    });
    // yield fork(checkError, err);
    checkError(err);
    throw err;
  }
}

export function checkError(res) {
  // const auth = yield select(state => state.auth);
  if (res.code === 401) {
    // yield put(logout());
    // store.dispatch(logout());
  }
  if (ERROR_CODE.indexOf(res.code) > -1) {
    window.location.href = `/error/${res.code}`;
  }
}
