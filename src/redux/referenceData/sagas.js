import { call, put, cancel, fork, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import _ from 'lodash';
import { REST_ACTION_TYPES, retrieveReferenceSuccess, retrieveReferenceFailed } from './actions';
import { apiWrapper } from '../../utils/reduxUtils';
import { getAllApi } from '../../api/crud';
import { convertResponseData } from '../crudCreator/dataProvider';

const debouncedIds = {};
const mappeds = {};
const tasks = {};

const addIds = (resource, ids) => {
  if (!debouncedIds[resource]) {
    debouncedIds[resource] = [];
  }
  debouncedIds[resource] = _.flatten(_.union(debouncedIds[resource], ids));
};

const addMappedBy = (resource, mappedBy) => {
  if (!mappeds[resource]) {
    mappeds[resource] = [];
  }
  mappeds[resource] = mappedBy;
};

function* finalize(resource) {
  // combined with cancel(), this debounces the calls
  yield call(delay, 50);
  yield fork(retrieveReferenceList, resource);
  delete tasks[resource];
  delete debouncedIds[resource];
  delete mappeds[resource];
}

export function* retrieveReference({ resource, ids, mappedBy }) {
  if (tasks[resource]) {
    yield cancel(tasks[resource]);
  }
  addIds(resource, ids);
  addMappedBy(resource, mappedBy);
  tasks[resource] = yield fork(finalize, resource);
}

export function* retrieveReferenceList(resource) {
  try {
    const params = {
      limit: 100,
      offset: 0,
      filter: JSON.stringify({
        [mappeds[resource] || 'id']: {
          $in: debouncedIds[resource],
        },
      }),
    };
    const response = yield call(apiWrapper, { isShowProgress: false }, getAllApi, resource, params);
    const result = convertResponseData('GET_ALL', response);
    yield put(retrieveReferenceSuccess(resource, result));
  } catch (error) {
    yield put(retrieveReferenceFailed(resource, error));
  }
}

export default [takeEvery(REST_ACTION_TYPES.RETRIEVE_REFERENCE, retrieveReference)];
