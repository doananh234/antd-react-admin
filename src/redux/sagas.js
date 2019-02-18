import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import caseTypesSaga from './caseTypes/sagas';
import typeGroupsSagas from './typeGroups/sagas';
import productTypesSagas from './productTypes/sagas';

export default function* root() {
  yield all([
    ...productTypesSagas,
    ...typeGroupsSagas,...caseTypesSaga, ...authSaga]);
}
