import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_LIST_TYPES, OFFER_SORT_TYPES } from '../../constants/offers';
import { IBaseOffer, IFullOffer } from '../../types/offers';
// import { fetchOffers } from '../api-actions';

interface IOfferState {
  city: string;
  sortParam: string;
  offers: IBaseOffer[];
  fullOffer: IFullOffer;

  isLoading: boolean;
  error: string;
}

const initialState: IOfferState = {
  city: CITY_LIST_TYPES.PARIS,
  sortParam: OFFER_SORT_TYPES.POPULAR,
  offers: [],
  fullOffer: {} as IFullOffer,

  isLoading: false,
  error: '',
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    // установка значений
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSortParam: (state, action: PayloadAction<string>) => {
      state.sortParam = action.payload;
    },

    setOffers: (state, action: PayloadAction<IBaseOffer[]>) => {
      state.offers = action.payload;
    },
    setFullOffer: (state, action: PayloadAction<IFullOffer>) => {
      state.fullOffer = action.payload;
    },

    setLoadingParam: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorParam: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    setInitialOfferData: (state) => {
      state.city = CITY_LIST_TYPES.PARIS;
      state.sortParam = OFFER_SORT_TYPES.POPULAR;
      state.offers = [] as IBaseOffer[];
      state.fullOffer = {} as IFullOffer;

      state.isLoading = false;
      state.error = '';
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchOffers.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchOffers.fulfilled, (state, action: PayloadAction<IBaseOffer[]>) => {
  //       state.isLoading = false;
  //       state.error = '';
  //       state.offers = action.payload;
  //     })
  //     .addCase(fetchOffers.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload as string;
  //     });
  // }
});

export const {
  setCity,
  setSortParam,
  setOffers,
  setFullOffer,
  setLoadingParam,
  setErrorParam,
  setInitialOfferData,
} = offerSlice.actions;

export default offerSlice.reducer;
