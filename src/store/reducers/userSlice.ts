import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/user';

interface IUserState {
  user: IUser;
  authorizationStatus: boolean;

  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: {} as IUser,
  authorizationStatus: true,

  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAuthorizationStatus: (state, action: PayloadAction<boolean>) => {
      state.authorizationStatus = action.payload;
    },

    setInitialData: (state) => {
      state.user = {} as IUser;
      state.authorizationStatus = false;

      state.isLoading = false;
      state.error = '';
    },
  },
});

export const {
  setUser,
  setAuthorizationStatus,
  setInitialData,
} = userSlice.actions;

export default userSlice.reducer;
