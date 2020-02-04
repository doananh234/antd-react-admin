import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import usersSagas from './users/sagas';
import referenceSagas from './referenceData/sagas';
import configSagas from './config/sagas';
import modalSagas from './modal/sagas';
import userTypesSagas from './userTypes/sagas';

export default function* root() {
  yield all([
    ...userTypesSagas,
    ...modalSagas,
    ...configSagas,
    ...usersSagas,
    ...authSaga,
    ...referenceSagas,
  ]);
}
