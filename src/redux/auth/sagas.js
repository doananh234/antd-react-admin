import { takeEvery, put, call } from 'redux-saga/effects';
import { apiWrapper } from '../../utils/reduxUtils';
import {
  AuthTypes,
  loginSuccessAction,
  getCurentUser,
  loginFailureAction,
  updateUserSuccess,
  updateUserFailure,
  getCurentUserFailure,
  getCurentUserSuccess,
} from './actions';
import {
  loginApi,
  deleteInstallationApi,
  logoutApi,
  updateCurrentUserApi,
  getCurrentUserApi,
} from '../../api/user';

function* loginSaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSuccessNoti: false,
      },
      loginApi,
      params
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      yield put(loginSuccessAction(response));
      yield put(getCurentUser());
    } else {
      yield put(loginFailureAction(response));
    }
  } catch (error) {
    yield put(loginFailureAction(error));
  }
}

function* logoutSaga() {
  try {
    const installationId = localStorage.getItem('installationId');
    yield call(
      apiWrapper,
      {
        isShowLoading: false,
        isShowSuccessNoti: false,
      },
      logoutApi
    );
    if (installationId) {
      yield call(
        apiWrapper,
        deleteInstallationApi,
        {
          isShowLoading: false,
          isShowSuccessNoti: false,
        },
        installationId
      );
      localStorage.clear('installationId');
    }
    localStorage.clear('sessionToken');
    localStorage.clear('fullName');
    localStorage.clear('id');
  } catch (error) {
    // /logic here
  }
}

function* getCurrentUserSaga() {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: false,
        isShowSuccessNoti: false,
      },
      getCurrentUserApi,
      {
        includes: ['role'],
      }
    );
    if (response.id) {
      localStorage.setItem('fullName', response.fullName);
      localStorage.setItem('id', response.id);
      yield put(getCurentUserSuccess(response));
    } else {
      yield put(getCurentUserFailure(response));
    }
  } catch (error) {
    yield put(getCurentUserFailure(error));
  }
}

function* updateUserSaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSuccessNoti: true,
      },
      updateCurrentUserApi,
      params
    );
    if (response.id) {
      yield put(updateUserSuccess(response));
    } else {
      yield put(updateUserFailure(response));
    }
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

export default [
  takeEvery(AuthTypes.LOGIN, loginSaga),
  takeEvery(AuthTypes.LOGOUT, logoutSaga),
  takeEvery(AuthTypes.GET_CURRENT_USER, getCurrentUserSaga),
  takeEvery(AuthTypes.UPDATE_USER, updateUserSaga),
];
