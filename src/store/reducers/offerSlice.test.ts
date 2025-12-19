import offerReducer, {
  setCity,
  setSortParam,
  setOffers,
  setOffersNearby,
  setFullOffer,
  setFavoriteOffers,
  setIsFavoriteOffersLoad,
  setReview,
  setIsReviewSending,
  setComments
} from './offerSlice';
import { City, OfferSortType } from '../../constants/offers';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { IReview } from '../../types/reviews';

describe('offerSlice reducer', () => {
  it('should return the initial state when called with undefined state', () => {
    const result = offerReducer(undefined, { type: 'UNKNOWN_ACTION' });

    expect(result).toEqual({
      city: City.Paris,
      sortParam: OfferSortType.Popular,
      offers: [],
      nearbyOffers: [],
      fullOffer: null,
      favoriteOffers: [],
      isFavoriteOffersLoad: false,
      review: null,
      isReviewSending: false,
      comments: [],
    });
  });

  it('should set current city', () => {
    const state = offerReducer(undefined, setCity(City.Amsterdam));
    expect(state.city).toBe(City.Amsterdam);
  });

  it('should set sort param', () => {
    const state = offerReducer(undefined, setSortParam(OfferSortType.Popular));
    expect(state.sortParam).toBe(OfferSortType.Popular);
  });

  it('should set offers', () => {
    const mockOffers = [{ id: '1', }, { id: '2' }];
    const state = offerReducer(undefined, setOffers(mockOffers as IBaseOffer[]));

    expect(state.offers).toEqual(mockOffers);
  });

  it('should set nearby offers', () => {
    const mockNearbyOffers = [{ id: '10' }];
    const state = offerReducer(undefined, setOffersNearby(mockNearbyOffers as IBaseOffer[]));

    expect(state.nearbyOffers).toEqual(mockNearbyOffers);
  });

  it('should set full offer', () => {
    const mockFullOffer = { id: 'full-1' };
    const state = offerReducer(undefined, setFullOffer(mockFullOffer as IFullOffer));

    expect(state.fullOffer).toEqual(mockFullOffer);
  });

  it('should set favorite offers', () => {
    const mockFavoriteOffers = [{ id: 'fav-1' }, { id: 'fav-2' }];
    const state = offerReducer(undefined, setFavoriteOffers(mockFavoriteOffers as IBaseOffer[]));

    expect(state.favoriteOffers).toEqual(mockFavoriteOffers);
  });

  it('should set favorite offers loading flag', () => {
    const state = offerReducer(undefined, setIsFavoriteOffersLoad(true));
    expect(state.isFavoriteOffersLoad).toBe(true);
  });

  it('should set review', () => {
    const mockReview = { id: 'rev-1' };
    const state = offerReducer(undefined, setReview(mockReview as IReview));

    expect(state.review).toEqual(mockReview);
  });

  it('should set review sending flag', () => {
    const state = offerReducer(undefined, setIsReviewSending(true));
    expect(state.isReviewSending).toBe(true);
  });

  it('should set comments list', () => {
    const mockComments = [{ id: 'c1' }, { id: 'c2' }];
    const state = offerReducer(undefined, setComments(mockComments as IReview[]));

    expect(state.comments).toEqual(mockComments);
  });
});
