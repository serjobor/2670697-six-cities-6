import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppSliceState {
  isLoading: boolean;
  error: string | null;
}

const initialState: IAppSliceState = {
  isLoading: false,
  error: null,
};

export const offerSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoadingParam: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorParam: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },

});

export const {
  setLoadingParam,
  setErrorParam,
} = offerSlice.actions;

export default offerSlice.reducer;
