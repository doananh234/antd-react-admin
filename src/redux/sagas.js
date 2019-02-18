import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import caseTypesSaga from './caseTypes/sagas';
import typeGroupsSagas from './typeGroups/sagas';

export default function* root() {
  yield all([
    ...typeGroupsSagas,...caseTypesSaga, ...authSaga]);
}
