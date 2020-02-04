import { takeLatest, put, call, fork, select } from 'redux-saga/effects';
import _ from 'lodash';
import { apiWrapper } from 'utils/reduxUtils';
import { getAllApi, getByIdApi, postApi, putApi, delApi } from 'api/crud';
import { goBack } from 'connected-react-router';
import { PRIMARY_KEY } from './slice';
// import { showInAppNoti } from 'navigation/navigationActions';
import { convertResponseData, convertRequestParams } from './dataProvider';
import { DEFERRED } from '../ExposedPromiseMiddleware';
import { closeModal } from '../modal/slice';

function* getAllSaga(data, options = {}, resource, actions) {
  try {
    const { pageSize, page, filter } = yield select(state => state[resource]);
    const convertRequest = convertRequestParams(
      'GET_ALL',
      {
        limit: pageSize,
        page,
        filter,
        ...data,
      },
      resource,
    );
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      getAllApi,
      options.customApiResource || resource,
      convertRequest,
    );
    const result = convertResponseData('GET_ALL', response);
    if (result.ids) {
      yield put(
        actions.getAllSuccess({
          data: {
            numberOfPages: Math.round(result.total / pageSize),
            ...result,
          },
          options,
        }),
      );
    } else {
      yield put(actions.getAllFailure({ data: response, options }));
    }
  } catch (error) {
    yield put(actions.getAllFailure({ data: error, options }));
  }
}

function* getByIdSaga(
  data,
  options = { isRequestApi: true },
  resource,
  actions,
) {
  try {
    if (!options.isRequestApi) {
      yield put(actions.getByIdSuccess(data));
      return;
    }
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      getByIdApi,
      options.customApiResource || resource,
      data[PRIMARY_KEY],
    );
    const result = convertResponseData('GET_BY_ID', response);
    if (result) {
      yield put(actions.getByIdSuccess({ data: result }));
    } else {
      yield put(actions.getByIdFailure({ data: result }));
    }
  } catch (error) {
    yield put(actions.getByIdFailure({ data: error }));
  }
}
// function* editSaga(data, resource, successAction, failureAction, getOne)
function* editSaga(data, options = {}, resource, actions, getOne, deferred) {
  // delete data.c
  try {
    const currentModal = yield select(state => state.router.location.hash);
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      putApi,
      options.customApiResource || resource,
      data[PRIMARY_KEY],
      data,
    );
    const result = convertResponseData('EDIT', response);
    if (result) {
      yield put(actions.editSuccess({ data: { ...data, ...result } }));
      // yield put(successAction({ ...data, ...result }));
      deferred.resolve({ data: { ...data, ...result } });
      if (options.isBack) {
        yield put(currentModal ? closeModal() : goBack());
      }
    } else {
      yield put(actions.editFailure({ data: { ...data, ...response } }));
      deferred.reject({ data: { ...data, ...response } });
    }
  } catch (error) {
    yield put(actions.editFailure({ data: error }));
    deferred.reject(error);
    //
  }
}

function* createSaga(data, options = {}, resource, actions, deferred) {
  try {
    const currentModal = yield select(state => state.router.location.hash);
    const response = yield call(
      apiWrapper,
      { isShowProgress: options.isShowProgress },
      postApi,
      options.customApiResource || resource,
      data,
    );
    const result = convertResponseData('CREATE', response);
    if (result) {
      yield put(actions.createSuccess({ data: result }));
      deferred.resolve(result);
      if (options.isBack) {
        yield put(currentModal ? closeModal() : goBack());
      }
    } else {
      // showInAppNoti({ title: null, content: response.message, type: 'error' });
      yield put(actions.createFailure({ data: response }));
      deferred.reject(response);
    }
  } catch (error) {
    yield put(actions.createFailure({ data: error }));
    deferred.reject(error);
  }
}

function* delSaga(data, options = {}, resource, actions, deferred) {
  try {
    const response = yield call(
      apiWrapper,
      { isShowProgress: true },
      delApi,
      options.customApiResource || resource,
      data.path || data[PRIMARY_KEY],
    );
    const result = convertResponseData('DELETE', response);
    if (result.success) {
      yield put(actions.delSuccess({ data }));
      deferred.resolve(result || {});
    } else {
      yield put(actions.delFailure({ data: response }));
      deferred.reject(response);
    }
  } catch (error) {
    yield put(actions.delFailure({ data, error }));
    deferred.reject(error);
  }
}

const makeCRUDSagaCreator = (resource, actions) => {
  function* getAllSagaCreator({ payload: { data, options } }) {
    yield fork(getAllSaga, data, options, resource, actions);
  }
  function* getByIdSagaCreator({ payload: { data, options } }) {
    yield fork(getByIdSaga, data, options, resource, actions);
  }
  function* editSagaCreator({
    payload: { data, options },
    [DEFERRED]: deferred,
  }) {
    yield fork(
      editSaga,
      data,
      options,
      resource,
      actions,
      getByIdSaga,
      deferred,
    );
  }
  function* deleteSagaCreator({
    payload: { data, options },
    [DEFERRED]: deferred,
  }) {
    yield fork(delSaga, data, options, resource, actions, deferred);
  }
  function* createSagaCreator({
    payload: { data, options },
    [DEFERRED]: deferred,
  }) {
    yield fork(createSaga, data, options, resource, actions, deferred);
  }
  const sagas = {
    GET_ALL: getAllSagaCreator,
    GET_BY_ID: getByIdSagaCreator,
    EDIT: editSagaCreator,
    DELETE: deleteSagaCreator,
    CREATE: createSagaCreator,
  };
  return sagas;
};

export const makeCRUDSaga = (resource, ignoreActions = [], actions) => {
  const sagaCreators = makeCRUDSagaCreator(resource, actions);
  const crudSagas = {
    [actions.getAll().type]: sagaCreators.GET_ALL,
    [actions.create().type]: sagaCreators.CREATE,
    [actions.del().type]: sagaCreators.DELETE,
    [actions.edit().type]: sagaCreators.EDIT,
    [actions.getById().type]: sagaCreators.GET_BY_ID,
  };
  const activeSagas = _.omit(crudSagas, ignoreActions);

  return Object.keys(activeSagas).map(key => takeLatest(key, activeSagas[key]));
};

export default makeCRUDSaga;
