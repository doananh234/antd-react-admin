import { call, put, takeLatest } from 'redux-saga/effects';
import { apiWrapper } from 'utils/reduxUtils';
import { getConfig } from 'api/configs';
import { getConfigSuccess, getConfigFailure } from './slice';

export function* getConfigSaga() {
  try {
    const response = yield call(
      apiWrapper,
      { isShowProgress: false, isShowSuccessNoti: false },
      getConfig,
    );
    if (response) {
      yield put(getConfigSuccess(response));
    } else {
      yield put(getConfigFailure(response));
    }
  } catch (error) {
    yield put(getConfigFailure(error));
  }
}

export default [takeLatest([getConfig.type], getConfigSaga)];
