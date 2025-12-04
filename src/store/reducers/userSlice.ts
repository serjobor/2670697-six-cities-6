import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/user';
import { AuthorizationStatus } from '../../constants/user';

interface IUserState {
  user: IUser;
  authorizationStatus: AuthorizationStatus;

  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: {} as IUser,
  authorizationStatus: AuthorizationStatus.Unknown,

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
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },

    removeUserData: (state) => {
      state.user = {} as IUser;
      state.authorizationStatus = AuthorizationStatus.NoAuth;

      state.isLoading = false;
      state.error = '';
    },
  },
});

export const {
  setUser,
  setAuthorizationStatus,
  removeUserData,
} = userSlice.actions;

export default userSlice.reducer;
