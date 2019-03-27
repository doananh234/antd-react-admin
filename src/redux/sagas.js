import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import productTypesSagas from './productTypes/sagas';
import usersSagas from './users/sagas';
import projectsSagas from './projects/sagas';
import statusesSagas from './statuses/sagas';
import departmentsSagas from './departments/sagas';
import titlesSagas from './titles/sagas';
import activityTypesSagas from './activityTypes/sagas';
import clientsSagas from './clients/sagas';
import companiesSagas from './companies/sagas';
import referenceSagas from './referenceData/sagas';

export default function* root() {
  yield all([
    ...companiesSagas,
    ...clientsSagas,
    ...activityTypesSagas,
    ...titlesSagas,
    ...departmentsSagas,
    ...statusesSagas,
    ...projectsSagas,
    ...usersSagas,
    ...productTypesSagas,
    ...authSaga,
    ...referenceSagas,
  ]);
}
