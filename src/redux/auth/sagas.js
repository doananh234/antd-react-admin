import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { apiWrapper } from '../../utils/reduxUtils';
import { AuthTypes, loginSuccessAction } from './actions';

function* loginSaga({ params }) {
  yield call(apiWrapper, {}, delay, 500);
  yield put(loginSuccessAction(params));
}

export default [takeEvery(AuthTypes.LOGIN, loginSaga)];
