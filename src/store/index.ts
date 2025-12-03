import { configureStore } from '@reduxjs/toolkit';
import offerReducer from './reducers/offerSlice';
import userReducer from './reducers/userSlice';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offer: offerReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
