import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_LIST_TYPES, OFFER_SORT_TYPES } from '../../constants/offers';
import { IBaseOffer, IFullOffer } from '../../types/offers';

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
  offers: [] as IBaseOffer[],
  fullOffer: {} as IFullOffer,

  isLoading: false,
  error: '',
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setsortParam: (state, action: PayloadAction<string>) => {
      state.sortParam = action.payload;
    },

    setOffers: (state, action: PayloadAction<IBaseOffer[]>) => {
      state.offers = action.payload;
    },
    setFullOffer: (state, action: PayloadAction<IFullOffer>) => {
      state.fullOffer = action.payload;
    },

    setInitialData: (state) => {
      state.city = CITY_LIST_TYPES.PARIS;
      state.sortParam = OFFER_SORT_TYPES.POPULAR;
      state.offers = {} as IBaseOffer[];
      state.fullOffer = {} as IFullOffer;

      state.isLoading = false;
      state.error = '';
    },
  },
});

export const {
  setCity,
  setsortParam,
  setOffers,
  setInitialData,
} = offerSlice.actions;

export default offerSlice.reducer;
