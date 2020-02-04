import { takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { apiWrapper } from 'utils/reduxUtils';
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
} from 'api/user';
import {
  loginSuccess,
  loginFail,
  getCurentUserSuccess,
  getCurentUserFailure,
  updateUserSuccess,
  updateUserFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
  updateUser,
  forgotPassword,
  getCurentUser,
  login,
  logout,
  resetPassword,
  register,
  registerWithToken,
  registerFail,
  registerSuccess,
} from './slice';

function* loginSaga({ payload }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSuccessNoti: false,
      },
      loginApi,
      payload,
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      yield put(loginSuccess(response));
      yield put(getCurentUser());
    } else {
      yield put(loginFail(response));
    }
  } catch (error) {
    yield put(loginFail(error));
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
      logoutApi,
    );
    if (installationId) {
      yield call(
        apiWrapper,
        deleteInstallationApi,
        {
          isShowLoading: false,
          isShowSuccessNoti: false,
        },
        installationId,
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
      },
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
      params,
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
      { email },
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
      },
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
      params,
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      yield put(registerSuccess(response));
      yield put(getCurentUser());
    } else {
      yield put(registerFail(response));
    }
  } catch (error) {
    yield put(registerFail(error));
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
      params,
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      yield put(registerSuccess(response));
      yield put(getCurentUser());
    } else {
      yield put(registerFail(response));
    }
  } catch (error) {
    yield put(registerFail(error));
  }
}

export default [
  takeEvery([login.type], loginSaga),
  takeEvery([logout.type], logoutSaga),
  takeEvery([getCurentUser.type], getCurrentUserSaga),
  takeEvery([updateUser.type], updateUserSaga),
  takeEvery([forgotPassword.type], forgotPasswordSaga),
  takeEvery([resetPassword.type], resetPasswordSaga),
  takeEvery([register.type], registerSaga),
  takeEvery([registerWithToken.type], registerWithTokenSaga),
];
