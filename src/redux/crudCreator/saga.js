import { takeLatest, put, call, fork, select } from 'redux-saga/effects';
import _ from 'lodash';
import { goBack } from 'connected-react-router';
import { apiWrapper } from '../../utils/reduxUtils';
import { getAllApi, getDataByIdApi, postApi, putApi, delApi } from '../../api/crud';
import { makeActionName } from '../../utils/textUtils';
import { PRIMARY_KEY, CRUD_ACTIONS } from './actions';
import { convertResponseData, convertRequestParams } from './dataProvider';
import { closeModal } from '../modal/actions';

function* getAllSaga(data, options = {}, resource, successAction, failureAction, primaryKey) {
  try {
    const { limit, page, filter } = yield select(state => state[resource]);
    const convertRequest = convertRequestParams(
      'GET_ALL',
      {
        limit,
        offset: limit * (page - 1),
        filter,
        ...data,
      },
      resource,
      { primaryKey }
    );
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      getAllApi,
      options.customApiResource || resource,
      convertRequest
    );
    const result = convertResponseData('GET_ALL', response, { primaryKey });
    if (result.data) {
      yield put(
        successAction({
          numberOfPages: Math.round(result.total / limit),
          ...result,
        })
      );
    } else {
      yield put(failureAction(response));
    }
  } catch (error) {
    yield put(failureAction(error));
  }
}

function* getDataByIdSaga(
  data,
  options = { isRequestApi: true },
  resource,
  successAction,
  failureAction,
  primaryKey = PRIMARY_KEY
) {
  try {
    if (!options.isRequestApi) {
      yield put(successAction(data));
      return;
    }
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      getDataByIdApi,
      options.customApiResource || resource,
      data[PRIMARY_KEY]
    );
    const result = convertResponseData('GET_BY_ID', response, { primaryKey });
    if (result) {
      yield put(successAction(result));
    } else {
      yield put(failureAction(result));
    }
  } catch (error) {
    yield put(failureAction(error));
  }
}
// function* editSaga(data, resource, successAction, failureAction, getOne)
function* editSaga(
  data,
  options = {},
  resource,
  successAction,
  failureAction,
  primaryKey = PRIMARY_KEY
) {
  // delete data.c
  try {
    const currentModal = yield select(state => state.modal.current);
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      putApi,
      options.customApiResource || resource,
      data[PRIMARY_KEY],
      data
    );
    const result = convertResponseData('EDIT', response, { primaryKey });
    if (result) {
      yield put(successAction({ ...data, ...result }));
      // yield put(successAction({ ...data, ...result }));
      yield put(currentModal ? closeModal() : goBack());
    } else {
      yield put(failureAction({ ...data, ...response }));
    }
  } catch (error) {
    yield put(failureAction(error));
    //
  }
}

function* createSaga(data, options = {}, resource, successAction, failureAction, primaryKey) {
  try {
    const currentModal = yield select(state => state.modal.current);
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      postApi,
      options.customApiResource || resource,
      data
    );
    const result = convertResponseData('CREATE', response, { primaryKey });
    if (result) {
      yield put(successAction(result));
      yield put(currentModal ? closeModal() : goBack());
    } else {
      yield put(failureAction(response));
    }
  } catch (error) {
    //
    yield put(failureAction(error));
  }
}

function* delSaga(
  data,
  options = {},
  resource,
  successAction,
  failureAction,
  primaryKey = PRIMARY_KEY
) {
  try {
    const response = yield call(
      apiWrapper,
      { isShowProgress: true },
      delApi,
      options.customApiResource || resource,
      data.path || data[PRIMARY_KEY]
    );
    const result = convertResponseData('DELETE', data, { primaryKey });
    if (result) {
      yield put(successAction(result || {}));
    } else {
      yield put(failureAction(response));
    }
  } catch (error) {
    yield put(failureAction(error));
  }
}

const makeCRUDSagaCreator = (resource, actions, primaryKey) => {
  function* getAllSagaCreator({ data, options }) {
    yield fork(
      getAllSaga,
      data,
      options,
      resource,
      actions[makeActionName(`GET_ALL_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)],
      actions[makeActionName(`GET_ALL_${_.snakeCase(resource).toUpperCase()}_FAILURE`)],
      primaryKey
    );
  }
  function* getDataByIdSagaCreator({ data, options }) {
    yield fork(
      getDataByIdSaga,
      data,
      options,
      resource,
      actions[makeActionName(`GET_BY_ID_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)],
      actions[makeActionName(`GET_BY_ID_${_.snakeCase(resource).toUpperCase()}_FAILURE`)],
      primaryKey
    );
  }
  function* editSagaCreator({ data, options }) {
    yield fork(
      editSaga,
      data,
      options,
      resource,
      actions[makeActionName(`EDIT_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)],
      actions[makeActionName(`EDIT_${_.snakeCase(resource).toUpperCase()}_FAILURE`)],
      getDataByIdSaga,
      primaryKey
    );
  }
  function* deleteSagaCreator({ data, options }) {
    yield fork(
      delSaga,
      data,
      options,
      resource,
      actions[makeActionName(`DELETE_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)],
      actions[makeActionName(`DELETE_${_.snakeCase(resource).toUpperCase()}_FAILURE`)],
      primaryKey
    );
  }
  function* createSagaCreator({ data, options }) {
    yield fork(
      createSaga,
      data,
      options,
      resource,
      actions[makeActionName(`CREATE_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)],
      actions[makeActionName(`CREATE_${_.snakeCase(resource).toUpperCase()}_FAILURE`)],
      primaryKey
    );
  }
  const sagas = {
    GET_ALL: getAllSagaCreator,
    GET_BY_ID: getDataByIdSagaCreator,
    EDIT: editSagaCreator,
    DELETE: deleteSagaCreator,
    CREATE: createSagaCreator,
  };
  return sagas;
};

const rootCRUDSaga = (resource, ignoreActions = [], actions, primaryKey) => {
  const sagaCreators = makeCRUDSagaCreator(resource, actions, primaryKey);
  const acceptActions = _.xor(CRUD_ACTIONS, ignoreActions);
  return acceptActions.map(data =>
    takeLatest(`${data}_${_.snakeCase(resource).toUpperCase()}`, sagaCreators[data])
  );
};

export default rootCRUDSaga;
