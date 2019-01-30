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
  limit: 10,
  total: 0,
  numberOfPages: 1,
  sort: '',
};
// getAll

export const getAll = (state, { data = {}, options = {} }) =>
  options.isRefresh
    ? { ...INITIAL_CRUD_STATE, loading: true, ...data }
    : {
        ...state,
        loading: true,
        error: null,
        page: state.page + 1,
        ...data,
      };

export const getAllSuccess = (state, { data }) => ({
  ...state,
  loading: false,
  ...data,
  ids: [...state.ids, ...data.ids],
  data: { ...state.data, ...data.data },
});

export const getAllFailure = (state, { data }) => ({ ...state, loading: false, error: data });

// getOne

export const setCurrent = (state, { data }) => ({
  ...state,
  currentId: data[PRIMARY_KEY],
  loading: true,
});

export const setCurrentSuccess = (state, { data }) => ({
  ...state,
  data: { ...state.data, [data[PRIMARY_KEY]]: data },
  loading: false,
});

export const setCurrentFailure = (state, { data }) => ({ ...state, loading: false, error: data });

// Create

export const create = state => ({
  ...state,
  error: null,
  loading: true,
});

export const createSuccess = (state, { data }) => ({
  ...state,
  data: { ...state.data, [data[PRIMARY_KEY]]: data },
  ids: [...state.ids, data[PRIMARY_KEY]],
  currentId: data.id,
  loading: false,
  error: null,
});

export const createFailure = (state, { data }) => ({
  ...state,
  loading: false,
  error: data,
});

// Edit

export const edit = (state, { data }) => ({
  ...state,
  error: null,
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: true },
  loading: true,
});

export const editSuccess = (state, { data }) => ({
  ...state,
  data: {
    ...state.data,
    [data[PRIMARY_KEY]]: { ...state.data[data[PRIMARY_KEY]], ...data },
  },
  itemLoadings: { ...state.itemLoadings, [data[PRIMARY_KEY]]: false },
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
  data: data[PRIMARY_KEY] ? { ...state.data, [data[PRIMARY_KEY]]: null } : null,
  itemLoadings: data[PRIMARY_KEY] ? { ...state.data, [data[PRIMARY_KEY]]: null } : null,
  error: null,
  currentId: null,
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
