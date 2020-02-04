import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers';
import rootSaga from './sagas';
import deferredMiddleware from './ExposedPromiseMiddleware';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware(),
  deferredMiddleware,
  sagaMiddleware,
  routerMiddleware(history),
];

// eslint-disable-next-line
const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: reducers(history),
  middleware: [...middleware, ...getDefaultMiddleware()],
});
sagaMiddleware.run(rootSaga);

export default store;
