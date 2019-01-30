import { makeActionCreator, makeConstantCreator } from '../../utils/reduxUtils';

export const REST_ACTION_TYPES = makeConstantCreator(
  'RETRIEVE_REFERENCE',
  'RETRIEVE_REFERENCE_SUCCESS',
  'RETRIEVE_REFERENCE_FAILURE',

  'CLEAR_DATA',

  'SEARCH_REFERENCE',
  'SEARCH_REFERENCE_SUCCESS',
  'SEARCH_REFERENCE_FAILURE'
);
export const retrieveReference = (resource, ids, mappedBy) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_REFERENCE, { resource, ids, mappedBy });

export const retrieveReferenceSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_REFERENCE_SUCCESS, {
    resource,
    data,
  });
export const retrieveReferenceFailed = error =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_REFERENCE_FAILURE, error);

export const searchReference = (resource, text, searchKey) =>
  makeActionCreator(REST_ACTION_TYPES.SEARCH_REFERENCE, { resource, text, searchKey });

export const searchReferenceSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.SEARCH_REFERENCE_SUCCESS, {
    resource,
    data,
  });
export const searchReferenceFailed = error =>
  makeActionCreator(REST_ACTION_TYPES.SEARCH_REFERENCE_FAILURE, error);

export const clearData = (key, resource) =>
  makeActionCreator(REST_ACTION_TYPES.CLEAR_DATA, { key, resource });
