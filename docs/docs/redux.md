# CRUD Actions

- `/redux/${modal}`

The Rest List use to show data of a model.

## Default State

```js
INITIAL_CRUD_STATE = {
  loading: false, // => loading when get&filter filter list
  itemLoadings: {}, // => loading when get&update one record
  error: null, // => error when request API
  data: {}, // => data with keyBy id
  ids: [], // => list ids use to show on table
  currentId: null, // => currentId you manage: edit, show
  filter: {}, // => filter of list.
  page: 1, // => the current page
  limit: 20, // => the limit record per page
  total: 0, // => total data
  numberOfPages: 1, // => number of pages
  sort: '', // => sortBy, orderBy
  currentData: {}, // => current data you manage: edit, show
};
```

## Props

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `getAll${models}`  | Get all data actions for the model   |
| `getDataById${models}` | Get by Id data actions for the model |
| `edit${models}`    | Edit action for the model            |
| `create${models}`  | Create action for the model          |

## Add Custom Action

- `/redux/${model}/actions.js`

```js
import {
  makeCRUDConstantCreator,
  makeCRUDActionsCreator,
} from '../crudCreator/slice';
import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const PRIMARY_KEY = 'id';
export const MODEL = 'models';
export const IGNORE_ACTIONS = [];
export const ModelTypes = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS),
  ...makeConstantCreator('CUSTOM_ACTION'), // add custom action
};
const CRUDModelActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
export const customAction = data =>
  makeActionCreator(ModelTypes.CUSTOM_ACTION, { data });
/**
 * getAllCaseTypes({pageSize, page })
 * getDataByIdCaseTypes(data)
 * createCaseTypes(data)
 * deleteCaseTypes()
 * editCaseTypes(data)
 */
export default { ...CRUDModelActions, customAction };
```

- `/redux/${model}/reducer.js`

```js
import { makeReducerCreator } from '../../utils/reduxUtils';
import {
  makeCRUDReducerCreator,
  INITIAL_CRUD_STATE,
} from '../crudCreator/reducer';
import { MODEL, IGNORE_ACTIONS, ModelTypes } from './actions';

export const INITIAL_STATE = {
  ...INITIAL_CRUD_STATE,
};

const customAction = (state, { data }) => ({
  ...state,
  customData: data,
});

const reducer = makeReducerCreator(INITIAL_STATE, {
  ...makeCRUDReducerCreator(MODEL, IGNORE_ACTIONS),
  [ModelTypes.CUSTOM_ACTION]: customAction,
});

export default reducer;
```

- `/redux/${model}/sagas.js`

```js
import { call, put, takeEvery, select } from 'redux-saga/effects';
import ModelActions, {
  ModelTypes,
  MODEL,
  IGNORE_ACTIONS,
  PRIMARY_KEY,
} from './actions';
import rootCRUDSaga from '../crudCreator/saga';
// use IGNORE_SAGAS to replace "saga" or ignore "saga"
// IGNORE_SAGAS = ['GET_ALL', 'GET_BY_ID', 'DELETE', 'EDIT', 'CREATE'];

const IGNORE_SAGAS = IGNORE_ACTIONS;

export function* customSaga() {
  try {
    // your code
  } catch (error) {
    // your code
  }
}

export default [
  ...rootCRUDSaga(MODEL, IGNORE_SAGAS, ModelActions, PRIMARY_KEY),
  takeEvery(ModelTypes.CUSTOM_ACTION, customSaga),
];
```

## Format request and response data with your API

- `/redux/crudCreator/dataProvider.js`

```js
import { keyBy } from 'lodash';
import { PRIMARY_KEY } from './actions'; // =>default: PRIMARY_KEY=id
import { getValidData } from '../../utils/tools';

export const convertRequestParams = (
  type,
  params,
  // resource
  // options = { primaryKey: PRIMARY_KEY }
) => {
  const formatedParams = {
    ...params,
    page: undefined,
    count: undefined,
  };
  const filter = getValidData(formatedParams.filter);
  switch (type) {
    case 'GET_ALL': // => format data for request: page,limit, filter, order,...
      return {
        ...formatedParams,
        filter:
          Object.keys(filter).length > 0 ? JSON.stringify(filter) : undefined,
      };
    case 'GET_BY_ID': // => format data for request: id, include,....
      return {
        ...params,
        [PRIMARY_KEY]: Number(params[PRIMARY_KEY]),
      };
    case 'EDIT':
      delete formatedParams.id;
      return getValidData(formatedParams); // => format data for request: clean undefined + null  data
    case 'CREATE':
      return getValidData(formatedParams); // => format data for request: clean undefined + null  data
    case 'DELETE':
    default:
      return {};
  }
};

export const convertResponseData = (type, response, options = {}) => {
  switch (type) {
    case 'GET_ALL': // => convert response to project structure: {data: {}, ids: [], total: 100}
      return {
        data: keyBy(
          response.results.map(data => ({
            ...data,
            [PRIMARY_KEY]: data[PRIMARY_KEY],
            backupId: data[PRIMARY_KEY],
          })),
          PRIMARY_KEY,
        ),
        ids: response.results.map(data => data[PRIMARY_KEY]),
        total: response.total,
      };
    case 'GET_BY_ID':
    case 'CREATE':
      return response && response.id
        ? { ...response, [PRIMARY_KEY]: response[PRIMARY_KEY] }
        : null;
    case 'EDIT':
      return response && response.id ? { ...response } : null;
    case 'DELETE':
    default:
      return response;
  }
};
```
