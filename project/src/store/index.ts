import { configureStore } from '@reduxjs/toolkit';
import { storeUpdate } from './reducer';
import { createAPI } from '@utils/api';

export const api = createAPI();

export const store = configureStore({
  reducer: storeUpdate,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
