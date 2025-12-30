import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, OfferSortType } from '../../constants/offers';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { IReview } from '../../types/reviews';
import { NameSpace } from '../../constants';

interface IOfferState {
  city: string;
  sortParam: string;

  offers: IBaseOffer[];
  nearbyOffers: IBaseOffer[];
  fullOffer: IFullOffer | null;

  favoriteOffers: IBaseOffer[];
  isFavoriteOffersLoad: boolean;

  review: IReview | null;
  isReviewSending: boolean;
  comments: IReview[];
}

const initialState: IOfferState = {
  city: City.Paris,
  sortParam: OfferSortType.Popular,

  offers: [],
  fullOffer: null,
  nearbyOffers: [],

  favoriteOffers: [],
  isFavoriteOffersLoad: false,

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
      state.nearbyOffers = action.payload;
    },
    setFullOffer: (state, action: PayloadAction<IFullOffer>) => {
      state.fullOffer = action.payload;
    },

    setFavoriteOffers: (state, action: PayloadAction<IBaseOffer[]>) => {
      state.favoriteOffers = action.payload;
    },
    setIsFavoriteOffersLoad: (state, action: PayloadAction<boolean>) => {
      state.isFavoriteOffersLoad = action.payload;
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

  setFavoriteOffers,
  setIsFavoriteOffersLoad,

  setReview,
  setIsReviewSending,
  setComments,
} = offerSlice.actions;

export default offerSlice.reducer;
