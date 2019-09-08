import _ from 'lodash';
import { PRIMARY_KEY } from './actions';

export const INITIAL_CRUD_STATE = {
  loading: false,
  itemLoadings: {},
  error: null,
  data: {},
  ids: [],
  currentId: null,
  filter: {},
  page: 1,
  limit: 20,
  total: 0,
  numberOfPages: 1,
  sort: '',
  currentData: {},
};
// getAll

export const getAll = (state, { data = {}, options = {} }) =>
  options.isRefresh
    ? {
        ...state,
        ...INITIAL_CRUD_STATE,
        data: state.data,
        ids: state.ids,
        currentId: state.currentId,
        currentData: state.currentData,
        loading: true,
        total: state.total,
        ...data,
      }
    : {
        ...state,
        loading: true,
        error: null,
        page: state.page + 1,
        ...data,
      };

export const getAllSuccess = (state, { data, options }) => ({
  ...state,
  loading: false,
  ...data,
  ids: options.isRefresh ? data.ids : _.union(state.ids, data.ids),
  data: { ...state.data, ...data.data },
});

export const getAllFailure = (state, { data }) => ({ ...state, loading: false, error: data });

// getOne

export const setCurrent = (state, { data }) => ({
  ...state,
  currentId: data[PRIMARY_KEY],
  currentData: { ...data, ...state.data[data[PRIMARY_KEY]] },
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: true },
});

export const setCurrentSuccess = (state, { data }) => ({
  ...state,
  data: { ...state.data, [data[PRIMARY_KEY]]: data },
  currentData: data,
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: false },
});

export const setCurrentFailure = (state, { data }) => ({
  ...state,
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: true },
  error: data,
});

// Create

export const create = state => ({
  ...state,
  error: null,
  createLoading: true,
});

export const createSuccess = (state, { data }) => ({
  ...state,
  data: { ...state.data, [data[PRIMARY_KEY]]: data },
  ids: [data[PRIMARY_KEY], ...state.ids.slice(0, state.limit - 1)],
  currentId: data.id,
  currentData: data,
  createLoading: false,
  error: null,
  total: state.total + 1,
});

export const createFailure = (state, { data }) => ({
  ...state,
  createLoading: false,
  error: data,
});

// Edit

export const edit = (state, { data }) => ({
  ...state,
  error: null,
  currentData: data,
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: true },
});

export const editSuccess = (state, { data }) => ({
  ...state,
  data: {
    ...state.data,
    [data[PRIMARY_KEY]]: { ...state.data[data[PRIMARY_KEY]], ...data },
  },
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: false },
  currentData: data,
  error: null,
});

export const editFailure = (state, { data }) => ({
  ...state,
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: false },
  error: data,
});

// Delete

export const del = (state, { data }) => ({
  ...state,
  error: null,
  itemLoadings: data[PRIMARY_KEY] ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: true } : null,
});

export const delSuccess = (state, { data }) => ({
  ...state,
  data: data[PRIMARY_KEY] ? { ...state.data, [data[PRIMARY_KEY]]: null } : {},
  itemLoadings: data[PRIMARY_KEY] ? { ...state.data, [data[PRIMARY_KEY]]: null } : {},
  ids: state.ids.filter(id => id !== data[PRIMARY_KEY]),
  error: null,
  currentId: null,
  total: state.total - 1,
});

export const delFailure = (state, { data }) => ({
  ...state,
  itemLoadings: data[PRIMARY_KEY] ? { ...state.itemLoadings, [data[PRIMARY_KEY]]: false } : null,
  error: data,
});

export const makeCRUDReducerCreator = (resource, ignoreActions = []) => {
  const listReducerHandlers =
    ignoreActions.indexOf('GET_ALL') > -1
      ? []
      : {
          [`GET_ALL_${_.snakeCase(resource).toUpperCase()}`]: getAll,
          [`GET_ALL_${_.snakeCase(resource).toUpperCase()}_SUCCESS`]: getAllSuccess,
          [`GET_ALL_${_.snakeCase(resource).toUpperCase()}_FAILURE`]: getAllFailure,
        };
  const getOneReducerHandlers =
    ignoreActions.indexOf('GET_BY_ID') > -1
      ? []
      : {
          [`GET_BY_ID_${_.snakeCase(resource).toUpperCase()}`]: setCurrent,
          [`GET_BY_ID_${_.snakeCase(resource).toUpperCase()}_SUCCESS`]: setCurrentSuccess,
          [`GET_BY_ID_${_.snakeCase(resource).toUpperCase()}_FAILURE`]: setCurrentFailure,
        };
  const editReducerHandlers =
    ignoreActions.indexOf('EDIT') > -1
      ? []
      : {
          [`EDIT_${_.snakeCase(resource).toUpperCase()}`]: edit,
          [`EDIT_${_.snakeCase(resource).toUpperCase()}_SUCCESS`]: editSuccess,
          [`EDIT_${_.snakeCase(resource).toUpperCase()}_FAILURE`]: editFailure,
        };
  const createReducerHandlers =
    ignoreActions.indexOf('CREATE') > -1
      ? []
      : {
          [`CREATE_${_.snakeCase(resource).toUpperCase()}`]: create,
          [`CREATE_${_.snakeCase(resource).toUpperCase()}_SUCCESS`]: createSuccess,
          [`CREATE_${_.snakeCase(resource).toUpperCase()}_FAILURE`]: createFailure,
        };
  const delReducerHandlers =
    ignoreActions.indexOf('DELETE') > -1
      ? []
      : {
          [`DELETE_${_.snakeCase(resource).toUpperCase()}`]: del,
          [`DELETE_${_.snakeCase(resource).toUpperCase()}_SUCCESS`]: delSuccess,
          [`DELETE_${_.snakeCase(resource).toUpperCase()}_FAILURE`]: delFailure,
        };

  return {
    ...listReducerHandlers,
    ...getOneReducerHandlers,
    ...editReducerHandlers,
    ...createReducerHandlers,
    ...delReducerHandlers,
  };
};
