import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/user';
import { AuthorizationStatus, NameSpace } from '../../constants';

interface IUserState {
  user: IUser | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: IUserState = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },

    removeUserData: (state) => {
      state.user = null;
    },
  },
});

export const {
  setUser,
  setAuthorizationStatus,
  removeUserData,
} = userSlice.actions;

export default userSlice.reducer;
