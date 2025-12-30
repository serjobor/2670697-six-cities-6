import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';

interface IAppSliceState {
  isLoading: boolean;
  error: string | null;
}

const initialState: IAppSliceState = {
  isLoading: false,
  error: null,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setLoadingParam: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorParam: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },

});

export const {
  setLoadingParam,
  setErrorParam,
} = appSlice.actions;

export default appSlice.reducer;
