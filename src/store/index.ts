import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import appReducer from './reducers/appSlice';
import offerReducer from './reducers/offerSlice';
import userReducer from './reducers/userSlice';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    app: appReducer,
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
