import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import caseTypesSaga from './caseTypes/sagas';

export default function* root() {
  yield all([...caseTypesSaga, ...authSaga]);
}
