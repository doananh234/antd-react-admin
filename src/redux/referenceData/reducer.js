import _ from 'lodash';
import { makeReducerCreator } from '../../utils/reduxUtils';
import { REST_ACTION_TYPES } from './actions';

const initialState = {
  errorRequest: false,
};

const retrieveReference = (state, { resource, filter = {} }) => ({
  ...state,
  [resource]: {
    ...state[resource],
    ...filter,
    loading: true,
    ids: state[resource] ? state[resource].ids : [],
    data: state[resource] ? state[resource].data : {},
  },
});

const retrieveReferenceSuccess = (state, { resource, data }) => ({
    ...state,
    [resource]: {
      ...state[resource],
      data: { ...state[resource].data, ...data.data },
      ids: _.union(state[resource].ids, data.ids),
      loading: false,
    },
  });

const retrieveReferenceFailed = (state, { resource, error }) => ({
  ...state,
  error,
  [resource]: {
    ...state[resource],
    loading: false,
  },
});

const searchReference = (state, { resource, text, searchKey }) => ({
  ...state,
  [resource]: {
    ...state[resource],
    loading: true,
    searchText: text,
    searchKey,
  },
});

const searchReferenceSuccess = (state, { resource, data }) => ({
  ...state,
  [resource]: {
    ...state[resource],
    loading: false,
    data: { ...state[resource].data, ...data.data },
    filterIds: data.ids,
    ids: data.ids,
  },
});

const searchReferenceFailed = (state, { resource, error }) => ({
  ...state,
  error,
  [resource]: {
    ...state[resource],
    loading: false,
  },
});

const clearData = (state, { resource, filter = {} }) => ({
  ...state,
  [resource]: {
    ...state[resource],
    ...filter,
    loading: false,
    data: [],
  },
});

export default makeReducerCreator(initialState, {
  [REST_ACTION_TYPES.RETRIEVE_REFERENCE]: retrieveReference,
  [REST_ACTION_TYPES.RETRIEVE_REFERENCE_SUCCESS]: retrieveReferenceSuccess,
  [REST_ACTION_TYPES.RETRIEVE_REFERENCE_FAILURE]: retrieveReferenceFailed,

  [REST_ACTION_TYPES.SEARCH_REFERENCE]: searchReference,
  [REST_ACTION_TYPES.SEARCH_REFERENCE_SUCCESS]: searchReferenceSuccess,
  [REST_ACTION_TYPES.SEARCH_REFERENCE_FAILURE]: searchReferenceFailed,

  [REST_ACTION_TYPES.CLEAR_DATA]: clearData,
});
