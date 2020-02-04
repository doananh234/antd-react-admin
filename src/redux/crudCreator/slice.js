import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { DEFERRED } from '../ExposedPromiseMiddleware';

export const PRIMARY_KEY = 'id';

export const INITIAL_STATE = {
  loading: false,
  itemLoadings: {},
  error: null,
  data: {},
  ids: [],
  currentId: null,
  filter: {},
  page: 1,
  pageSize: 10,
  total: 0,
  numberOfPages: 1,
  sort: '',
};

// getAll
export const getAll = (state, { payload: { data = {}, options = {} } }) => {
  if (options.isRefresh) {
    // eslint-disable-next-line no-param-reassign
    state = {
      ...INITIAL_STATE,
      loading: true,
      ...data,
    };
  } else {
    // eslint-disable-next-line no-param-reassign
    state = {
      ...state,
      loading: true,
      error: null,
      page: state.page + 1,
      ...data,
    };
  }
  return state;
};

export const getAllSuccess = (state, { payload: { data } }) => {
  state.loading = false;
  state.ids = [...state.ids, ...data.ids];
  state.data = { ...state.data, ...data.data };
  state.total = data.total;
  state.numberOfPages = data.numberOfPages;
};

export const getAllFailure = (state, { payload: { data } }) => {
  state.loading = false;
  state.error = data;
  state.data = {};
  state.total = data.total;
};

// getOne

export const getById = (state, { payload: { data } }) => {
  state.currentId = data[PRIMARY_KEY];
  state.loading = true;
};

export const getByIdSuccess = (state, { payload: { data } }) => {
  state.data = { ...state.data, [data[PRIMARY_KEY]]: data };
  state.currentData = data;
  state.loading = false;
};

export const getByIdFailure = (state, { payload: { data } }) => {
  state.error = data;
  state.loading = false;
};

export const create = state => {
  state.error = null;
  state.loading = false;
};

export const createSuccess = (state, { payload: { data } }) => {
  state.data = { ...state.data, [data[PRIMARY_KEY]]: data };
  state.loading = false;
  state.ids = [...state.ids, data[PRIMARY_KEY]];
  state.currentId = data.id;
  state.error = null;
};

export const createFailure = (state, { payload: { data } }) => {
  state.error = data;
  state.loading = false;
};

// Edit

export const edit = (state, { payload: { data } }) => {
  state.error = null;
  state.loading = true;
  state.itemLoadings = { ...state.itemLoadings, [data[PRIMARY_KEY]]: true };
};

export const editSuccess = (state, { payload: { data } }) => {
  state.error = null;
  state.loading = false;
  state.data = {
    ...state.data,
    [data[PRIMARY_KEY]]: { ...state.data[data[PRIMARY_KEY]], ...data },
  };
  state.itemLoadings = { ...state.itemLoadings, [data[PRIMARY_KEY]]: false };
};

export const editFailure = (state, { payload: { data } }) => {
  state.error = data;
  state.loading = false;
  state.itemLoadings = { ...state.itemLoadings, [data[PRIMARY_KEY]]: false };
};

// Delete

export const del = (state, { payload: { data } }) => {
  state.error = null;
  state.itemLoadings = data[PRIMARY_KEY]
    ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: true }
    : null;
};

export const delSuccess = (state, { payload: { data } }) => {
  delete state.data[data[PRIMARY_KEY]];
  state.error = null;
  state.currentId = null;
  state.itemLoadings = data[PRIMARY_KEY]
    ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: null }
    : null;
  state.ids = _.xor(state.ids, [data[PRIMARY_KEY]]);
  state.data = data[PRIMARY_KEY] ? state.data : null;
};

export const delFailure = (state, { payload: { data } }) => {
  state.error = data;
  state.loading = false;
  state.itemLoadings = data[PRIMARY_KEY]
    ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: null }
    : null;
};

export const clearCurrentData = state => ({
  ...state,
  currentId: null,
  currentData: {},
});

export const setCurrent = (state, { data }) => ({
  ...state,
  currentId: data[PRIMARY_KEY],
  currentData: { ...data, ...state.data[data[PRIMARY_KEY]] },
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: true },
});

export const makeCRUDSlice = (model, customAction = {}) => {
  const reducers = {
    getAll: {
      reducer: getAll,
      prepare: (data, options) => ({
        payload: {
          data,
          options,
        },
        [DEFERRED]: true,
      }),
    },
    getAllFailure,
    getAllSuccess,
    create: {
      reducer: create,
      prepare: (data, options) => ({
        payload: {
          data,
          options,
        },
        [DEFERRED]: true,
      }),
    },
    createFailure,
    createSuccess,
    edit: {
      reducer: edit,
      prepare: (data, options) => ({
        payload: {
          data,
          options,
        },
        [DEFERRED]: true,
      }),
    },
    editFailure,
    editSuccess,
    del: {
      reducer: del,
      prepare: (data, options) => ({
        payload: {
          data,
          options,
        },
        [DEFERRED]: true,
      }),
    },
    delSuccess,
    delFailure,
    getById: {
      reducer: getById,
      prepare: (data, options) => ({
        payload: {
          data,
          options,
        },
        [DEFERRED]: true,
      }),
    },
    getByIdFailure,
    getByIdSuccess,
    clearCurrent: {
      reducer: clearCurrentData,
      prepare: (data, options) => ({
        payload: {
          data,
          options,
        },
        [DEFERRED]: true,
      }),
    },
    setCurrent: {
      reducer: setCurrent,
      prepare: (data, options) => ({
        payload: {
          data,
          options,
        },
        [DEFERRED]: true,
      }),
    },
    ...customAction,
  };

  const modelSlice = createSlice({
    name: model,
    initialState: INITIAL_STATE,
    reducers,
  });
  return modelSlice;
};

export default makeCRUDSlice;
