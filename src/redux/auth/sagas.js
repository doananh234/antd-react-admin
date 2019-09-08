import { takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
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
  forgotPasswordFailure,
  forgotPasswordSuccess,
  resetPasswordSuccess,
  resetPasswordFailure,
  registerSuccessAction,
  registerFailureAction,
} from './actions';
import {
  loginApi,
  deleteInstallationApi,
  logoutApi,
  updateCurrentUserApi,
  getCurrentUserApi,
  resetPasswordApi,
  forgotPasswordApi,
  registerApi,
  registerWithTokenApi,
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
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('fullName');
    localStorage.removeItem('id');
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
      localStorage.removeItem('installationId');
    }
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

function* forgotPasswordSaga({ email }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSuccessNoti: true,
      },
      forgotPasswordApi,
      { email }
    );
    yield put(forgotPasswordSuccess(response));
  } catch (error) {
    yield put(forgotPasswordFailure(error));
  }
}

function* resetPasswordSaga({ password, resetPasswordToken }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSuccessNoti: true,
      },
      resetPasswordApi,
      {
        password,
        resetPasswordToken,
      }
    );
    yield put(resetPasswordSuccess(response));
    yield put(push('/login'));
  } catch (error) {
    yield put(resetPasswordFailure(error));
  }
}

function* registerSaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSuccessNoti: false,
      },
      registerApi,
      params
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      yield put(registerSuccessAction(response));
      yield put(getCurentUser());
    } else {
      yield put(registerFailureAction(response));
    }
  } catch (error) {
    yield put(registerFailureAction(error));
  }
}

function* registerWithTokenSaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSuccessNoti: false,
      },
      registerWithTokenApi,
      params
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      yield put(registerSuccessAction(response));
      yield put(getCurentUser());
    } else {
      yield put(registerFailureAction(response));
    }
  } catch (error) {
    yield put(registerFailureAction(error));
  }
}

export default [
  takeEvery(AuthTypes.LOGIN, loginSaga),
  takeEvery(AuthTypes.LOGOUT, logoutSaga),
  takeEvery(AuthTypes.GET_CURRENT_USER, getCurrentUserSaga),
  takeEvery(AuthTypes.UPDATE_USER, updateUserSaga),
  takeEvery(AuthTypes.FORGOT_PASSWORD, forgotPasswordSaga),
  takeEvery(AuthTypes.RESET_PASSWORD, resetPasswordSaga),
  takeEvery(AuthTypes.REGISTER, registerSaga),
  takeEvery(AuthTypes.REGISTER_WITH_TOKEN, registerWithTokenSaga),
];
