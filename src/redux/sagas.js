import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import usersSagas from './users/sagas';
import referenceSagas from './referenceData/sagas';
import configSagas from './config/sagas';
import customersSagas from './customers/sagas';

export default function* root() {
  yield all([...customersSagas, ...configSagas, ...usersSagas, ...authSaga, ...referenceSagas]);
}
