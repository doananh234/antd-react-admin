import { call, put, cancel, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import _ from 'lodash';
import * as actions from './actions';
import { apiWrapper } from '../../utils/reduxUtils';
import { getAllApi } from '../../api/crud';

const debouncedIds = {};
const mappeds = {};
const tasks = {};

const addIds = (resource, ids) => {
  if (!debouncedIds[resource]) {
    debouncedIds[resource] = [];
  }
  debouncedIds[resource] = _.union(debouncedIds[resource], ids);
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
    const response = yield call(apiWrapper, getAllApi, false, false, resource, params);
    const convertData = {
      results: _.keyBy(response.results, mappeds[resource]),
      ids: response.results.map(data => data[mappeds[resource]]),
      count: response.total,
    };
    yield put(
      actions.retrieveReferenceSuccess(resource, {
        data: convertData.results,
        ids: convertData.ids,
        count: convertData.count,
      })
    );
  } catch (error) {
    yield put(actions.retrieveReferenceFailed(resource, error));
  }
}
