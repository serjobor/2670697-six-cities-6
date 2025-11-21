import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/users';

interface IUserState {
  users: IUser;
  authorizationStatus: boolean;

  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  users: {} as IUser,
  authorizationStatus: false,

  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.users = action.payload;
    },
    setAuthorizationStatus: (state, action: PayloadAction<boolean>) => {
      state.authorizationStatus = action.payload;
    },

    setInitialData: (state) => {
      state.users = {} as IUser;
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
