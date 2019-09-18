import { takeEvery, put, select } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import { ModalTypes } from './actions';

function* closeModelSaga() {
  try {
    const location = yield select(state => state.router.location);
    yield put(replace(location.pathname));
  } catch (error) {
    //
  }
}

export default [takeEvery(ModalTypes.CLOSE_MODAL, closeModelSaga)];
