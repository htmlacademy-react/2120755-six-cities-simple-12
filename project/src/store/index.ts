import { configureStore } from '@reduxjs/toolkit';
// import { storeUpdate } from './reducer';
import rootReducer from './reducers';
import { createAPI } from '@utils/api';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
