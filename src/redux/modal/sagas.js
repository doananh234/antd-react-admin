import { takeEvery, put, select } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import { closeModal } from './slice';

function* closeModelSaga() {
  try {
    const location = yield select(state => state.router.location);
    yield put(replace(`${location.pathname}${location.search}`));
  } catch (error) {
    //
  }
}

export default [takeEvery([closeModal.type], closeModelSaga)];
