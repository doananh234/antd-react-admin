import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import productTypesSagas from './productTypes/sagas';
import usersSagas from './users/sagas';
import statusesSagas from './statuses/sagas';
import departmentsSagas from './departments/sagas';
import titlesSagas from './titles/sagas';
import activityTypesSagas from './activityTypes/sagas';
import referenceSagas from './referenceData/sagas';
import testsSagas from './tests/sagas';

export default function* root() {
  yield all([
    ...testsSagas,
    ...activityTypesSagas,
    ...titlesSagas,
    ...departmentsSagas,
    ...statusesSagas,
    ...usersSagas,
    ...productTypesSagas,
    ...authSaga,
    ...referenceSagas,
  ]);
}
