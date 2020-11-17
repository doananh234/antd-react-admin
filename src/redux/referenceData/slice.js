import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { retrieveReference, retrieveReferenceList, retrieveReferenceListFromMapped, clearData } from './actions';
import { INITIAL_STATE } from '../crudCreator/slice';

const initialState = {
  errorRequest: false,
};

const { reducer } = createSlice({
  name: 'Reference',
  initialState,
  reducers: {
    [clearData]: (state, { payload: { resource, filter = {} } }) => {
      state[resource] = {
        ...state[resource],
        ...filter,
        loading: false,
        data: [],
      };
    },
  },
  extraReducers: {
    [retrieveReference.pending]: (
      state,
      {
        meta: {
          arg: { resource, filter = {} },
        },
      },
    ) => {
      state[resource] = {
        ...state[resource],
        ...filter,
        loading: true,
        ids: state[resource] ? state[resource].ids : [],
        data: state[resource] ? state[resource].data : {},
      };
    },
    [retrieveReferenceList.pending]: (
      state,
      {
        meta: {
          arg: { resource, data, options },
        },
      },
    ) => {
      if (options.isRefresh) {
        // eslint-disable-next-line
        state[resource] = {
          ...INITIAL_STATE,
          loading: true,
          ...data,
        };
      } else {
        // eslint-disable-next-line
        state[resource] = {
          ...state[resource],
          loading: true,
          error: null,
          page: state?.[resource]?.page + 1,
          ...data,
        };
      }
    },
    [retrieveReferenceList.fulfilled]: (state, { payload: { resource, data } }) => {
      state[resource] = {
        ...state[resource],
        data: { ...state[resource].data, ...data.data },
        ids: _.union(state[resource].ids, data.ids),
        loading: false,
        total: data.total,
        numberOfPages: data.numberOfPages,
      };
    },
    [retrieveReferenceList.rejected]: (state, { payload }) => {
      const { resource, error } = payload;
      if (payload && state[resource]) {
        state.error = error;
        state[resource].loading = false;
      }
    },
    [retrieveReferenceListFromMapped.fulfilled]: (
      state,
      { payload: { resource, data } },
    ) => {
      state[resource] = {
        ...state[resource],
        data: { ...state[resource].data, ...data.data },
        ids: _.union(state[resource].ids, data.ids),
        loading: false,
      };
    },
    [retrieveReferenceListFromMapped.rejected]: (state, { payload }) => {
      const { resource, error } = payload;
      if (payload && state[resource]) {
        state.error = error;
        state[resource].loading = false;
      }
    },
  },
});

export default reducer;
