import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { NameSpace } from '../../constants';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { IReview } from '../../types/reviews';
import { OfferSortType } from '../../constants/offers';

export const getCity = (state: RootState): string => state[NameSpace.Offer].city;
export const getSortParam = (state: RootState): string => state[NameSpace.Offer].sortParam;
export const getOffers = (state: RootState): IBaseOffer[] => state[NameSpace.Offer].offers;
export const getOffersNearby = (state: RootState): IBaseOffer[] => state[NameSpace.Offer].nearbyOffers;
export const getFullOffer = (state: RootState): IFullOffer | null => state[NameSpace.Offer].fullOffer;
export const getFavoriteoffers = (state: RootState): IBaseOffer[] => state[NameSpace.Offer].favoriteOffers;
export const getIsFavoriteoffersLoad = (state: RootState): boolean => state[NameSpace.Offer].isFavoriteOffersLoad;
export const getReview = (state: RootState): IReview | null => state[NameSpace.Offer].review;
export const getIsReviewSending = (state: RootState): boolean => state[NameSpace.Offer].isReviewSending;
export const getComments = (state: RootState): IReview[] => state[NameSpace.Offer].comments;

export const getOffersByCity = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffersByCity = createSelector(
  [getOffersByCity, getSortParam],
  (offers, sortParam) => {
    switch (sortParam) {
      case OfferSortType.LowToHigh:
        return [...offers].sort((a, b) => a.price - b.price);
      case OfferSortType.HighToLow:
        return [...offers].sort((a, b) => b.price - a.price);
      case OfferSortType.TopRating:
        return [...offers].sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }
);
