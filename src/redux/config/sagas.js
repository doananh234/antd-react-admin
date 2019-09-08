import { call, put, takeEvery } from 'redux-saga/effects';
import { ConfigTypes, getConfigSuccess, getConfigFailure } from './actions';
import { apiWrapper } from '../../utils/reduxUtils';
import { getConfig } from '../../api/configs';

export function* getConfigSaga() {
  try {
    const response = yield call(
      apiWrapper,
      { isShowProgress: false, isShowSuccessNoti: false },
      getConfig
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

export default [takeEvery(ConfigTypes.GET_CONFIG, getConfigSaga)];
