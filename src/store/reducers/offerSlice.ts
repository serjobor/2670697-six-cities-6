import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_LIST_TYPES, OFFER_SORT_TYPES } from '../../constants/offers';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { IReview } from '../../types/reviews';
import { NameSpace } from '../../constants';

interface IOfferState {
  city: string;
  sortParam: string;

  offers: IBaseOffer[];
  offersNearby: IBaseOffer[];
  fullOffer: IFullOffer | null;

  favoriteoffers: IBaseOffer[];
  isFavoriteoffersLoad: boolean;

  review: IReview | null;
  isReviewSending: boolean;
  comments: IReview[];
}

const initialState: IOfferState = {
  city: CITY_LIST_TYPES.PARIS,
  sortParam: OFFER_SORT_TYPES.POPULAR,

  offers: [],
  fullOffer: null,
  offersNearby: [],

  favoriteoffers: [],
  isFavoriteoffersLoad: false,

  review: null,
  isReviewSending: false,
  comments: [],
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
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

    setFavoriteoffers: (state, action: PayloadAction<IBaseOffer[]>) => {
      state.favoriteoffers = action.payload;
    },
    setIsFavoriteoffersLoad: (state, action: PayloadAction<boolean>) => {
      state.isFavoriteoffersLoad = action.payload;
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
  },
});

export const {
  setCity,
  setSortParam,

  setOffers,
  setOffersNearby,
  setFullOffer,

  setFavoriteoffers,
  setIsFavoriteoffersLoad,

  setReview,
  setIsReviewSending,
  setComments,
} = offerSlice.actions;

export default offerSlice.reducer;
