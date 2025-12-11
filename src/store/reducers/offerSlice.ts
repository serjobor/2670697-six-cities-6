import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_LIST_TYPES, OFFER_SORT_TYPES } from '../../constants/offers';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { IReview } from '../../types/reviews';

interface IOfferState {
  city: string;
  sortParam: string;

  offers: IBaseOffer[];
  offersNearby: IBaseOffer[];
  fullOffer: IFullOffer | null;

  review: IReview | null;
  isReviewSending: boolean;
  comments: IReview[];
}

const initialState: IOfferState = {
  city: CITY_LIST_TYPES.PARIS,
  sortParam: OFFER_SORT_TYPES.POPULAR,

  offers: [],
  offersNearby: [],
  fullOffer: null,

  review: null,
  isReviewSending: false,
  comments: [],
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

    setReview: (state, action: PayloadAction<IReview>) => {
      state.review = action.payload;
    },
    setIsReviewSending: (state, action: PayloadAction<boolean>) => {
      state.isReviewSending = action.payload;
    },
    setComments: (state, action: PayloadAction<IReview[]>) => {
      state.comments = action.payload;
    },

    setInitialOfferData: (state) => {
      state.city = CITY_LIST_TYPES.PARIS;
      state.sortParam = OFFER_SORT_TYPES.POPULAR;
      state.offers = [];
      state.review = null;
      state.isReviewSending = false;
      state.comments = [];
      state.offersNearby = [];
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

  setReview,
  setIsReviewSending,
  setComments,
  setInitialOfferData,
} = offerSlice.actions;

export default offerSlice.reducer;
