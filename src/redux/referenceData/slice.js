import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errorRequest: false,
};

const { actions, reducer } = createSlice({
  name: 'Reference',
  initialState,
  reducers: {
    retrieveReference: (state, { payload: { resource, filter = {} } }) => {
      state[resource] = {
        ...state[resource],
        ...filter,
        loading: true,
        ids: state[resource] ? state[resource].ids : [],
        data: state[resource] ? state[resource].data : {},
      };
    },
    retrieveReferenceSuccess: (state, { payload: { resource, data } }) => {
      state[resource] = {
        ...state[resource],
        data: { ...state[resource].data, ...data.data },
        ids: _.union(state[resource].ids, data.ids),
        loading: false,
      };
    },
    retrieveReferenceFailed: (state, { payload: { resource, error } }) => {
      state.error = error;
      state[resource].loading = false;
    },
    searchReference: (state, { payload: { resource, text, searchKey } }) => {
      state[resource] = {
        ...state[resource],
        loading: true,
        searchText: text,
        searchKey,
      };
    },
    searchReferenceSuccess: (state, { payload: { resource, data } }) => {
      state[resource] = {
        ...state[resource],
        loading: false,
        data: { ...state[resource].data, ...data.data },
        filterIds: data.ids,
        ids: data.ids,
      };
    },
    searchReferenceFailed: (state, { payload: { resource, error } }) => {
      state.error = error;
      state[resource].loading = false;
    },
    clearData: (state, { payload: { resource, filter = {} } }) => {
      state[resource] = {
        ...state[resource],
        ...filter,
        loading: false,
        data: [],
      };
    },
  },
});

export const {
  retrieveReference,
  retrieveReferenceSuccess,
  retrieveReferenceFailed,
  searchReference,
  searchReferenceSuccess,
  searchReferenceFailed,
  clearData,
} = actions;
export default reducer;
