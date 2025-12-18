import { RootState } from '..';
import { NameSpace } from '../../constants';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { IReview } from '../../types/reviews';

export const getCity = (state: RootState): string => state[NameSpace.Offer].city;
export const getSortParam = (state: RootState): string => state[NameSpace.Offer].sortParam;
export const getOffers = (state: RootState): IBaseOffer[] => state[NameSpace.Offer].offers;
export const getOffersNearby = (state: RootState): IBaseOffer[] => state[NameSpace.Offer].offersNearby;
export const getFullOffer = (state: RootState): IFullOffer | null => state[NameSpace.Offer].fullOffer;
export const getFavoriteoffers = (state: RootState): IBaseOffer[] => state[NameSpace.Offer].favoriteoffers;
export const getIsFavoriteoffersLoad = (state: RootState): boolean => state[NameSpace.Offer].isFavoriteoffersLoad;
export const getReview = (state: RootState): IReview | null => state[NameSpace.Offer].review;
export const getIsReviewSending = (state: RootState): boolean => state[NameSpace.Offer].isReviewSending;
export const getComments = (state: RootState): IReview[] => state[NameSpace.Offer].comments;
