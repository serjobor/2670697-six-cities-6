import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_LIST_TYPES, OFFER_SORT_TYPES } from '../../constants/offers';
import { IBaseOffer, IFullOffer } from '../../types/offers';

interface IOfferState {
  city: string;
  sortParam: string;
  offers: IBaseOffer[];
  offersNearby: IBaseOffer[];
  fullOffer: IFullOffer | null;
}

const initialState: IOfferState = {
  city: CITY_LIST_TYPES.PARIS,
  sortParam: OFFER_SORT_TYPES.POPULAR,
  offers: [],
  offersNearby: [],
  fullOffer: null,
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
    setOffersNearby: (state, action: PayloadAction<IBaseOffer[]>) => {
      state.offersNearby = action.payload;
    },
    setFullOffer: (state, action: PayloadAction<IFullOffer>) => {
      state.fullOffer = action.payload;
    },

    setInitialOfferData: (state) => {
      state.city = CITY_LIST_TYPES.PARIS;
      state.sortParam = OFFER_SORT_TYPES.POPULAR;
      state.offers = [];
      state.fullOffer = null;
    },
  },
});

export const {
  setCity,
  setSortParam,
  setOffers,
  setOffersNearby,
  setFullOffer,
  setInitialOfferData,
} = offerSlice.actions;

export default offerSlice.reducer;
