import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: reducers(),
  middleware: [...middleware],
});

export default store;
