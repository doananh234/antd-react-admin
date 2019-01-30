import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import roomsSaga from './rooms/sagas';

export default function* root() {
  yield all([...roomsSaga, ...authSaga]);
}
