import { configureStore } from '@reduxjs/toolkit';
import offerReducer from './reducers/offerSlice';
import userReducer from './reducers/userSlice';


export const store = configureStore({
  reducer: {
    offer: offerReducer,
    user: userReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
