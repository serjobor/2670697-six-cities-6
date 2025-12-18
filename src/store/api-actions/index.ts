import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../../constants';
import { IBaseOffer, IFavoriteData, IFullOffer } from '../../types/offers';
import { AuthData, IUser } from '../../types/user';
import { AppDispatch, RootState, store } from '..';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../../constants';
import { removeUserData, setAuthorizationStatus, setUser } from '../reducers/userSlice';
import { dropToken, saveToken } from '../../services/token';
import { setComments, setFavoriteoffers, setFullOffer, setIsFavoriteoffersLoad, setIsReviewSending, setOffers, setOffersNearby, setReview } from '../reducers/offerSlice';
import { setErrorParam, setLoadingParam } from '../reducers/appSlice';
import { IReview, IReviewData } from '../../types/reviews';
import { processErrorHandle } from '../../services/process-error-handle';

interface IThunkConfig {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

interface IApiError {
  errorType: string;
  message: string;
}

export const fetchOffers = createAsyncThunk<void, undefined, IThunkConfig>(
  'offer/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingParam(true));

    await api.get<IBaseOffer[]>(APIRoute.Offers)
      .then(({ data }) => {
        dispatch(setOffers(data));
      })
      .finally(() => {
        dispatch(setLoadingParam(false));
      });
  }
);

export const fetchOfferById = createAsyncThunk<void, string, IThunkConfig>(
  'offer/fetchOfferById',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<IFullOffer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setFullOffer(data));
  }
);

export const fetchOfferByIdNearby = createAsyncThunk<void, string, IThunkConfig>(
  'offer/fetchOfferByIdNearby',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<IBaseOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);
    dispatch(setOffersNearby(data.slice(0, 3)));
  }
);

export const fetchFavoriteOffers = createAsyncThunk<void, undefined, IThunkConfig>(
  'offer/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsFavoriteoffersLoad(true));

    await api.get<IBaseOffer[]>(APIRoute.Favorite)
      .then(({ data }) => {
        dispatch(setFavoriteoffers(data));
      })
      .finally(() => {
        dispatch(setIsFavoriteoffersLoad(false));
      });
  }
);

export const changeFavoriteStatusOffer = createAsyncThunk<IBaseOffer, IFavoriteData, IThunkConfig>(
  'offer/changeFavoriteStatusOffer',
  async ({ id, status}, { dispatch, extra: api }) => {
    const { data } = await api.post<IBaseOffer>(`${APIRoute.Favorite}/${id}/${status}`, { id, status });
    await dispatch(fetchFavoriteOffers());
    await dispatch(fetchOffers());
    return data;
  }
);

export const fetchComments = createAsyncThunk<void, string, IThunkConfig>(
  'offer/fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<IReview[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(
      setComments(
        data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10)
      )
    );
  }
);

export const addNewReviewOnSite = createAsyncThunk<void, IReviewData, IThunkConfig>(
  'offer/addNewCommentsOnSite',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    dispatch(setIsReviewSending(true));
    try {
      const { data } = await api.post<IReview>(`${APIRoute.Comments}/${id}`, { comment, rating });
      dispatch(setReview(data));

      await dispatch(fetchComments(id));
    } catch (error) {
      if (error && typeof error === 'object' && 'message' in error) {
        const typedError = error as IApiError | Error;
        processErrorHandle(typedError.message);
      }
      throw error;
    } finally {
      dispatch(setIsReviewSending(false));
    }
  }
);

export const checkAuthStatus = createAsyncThunk<void, undefined, IThunkConfig>(
  'user/checkAuthStatus',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));

      const { data } = await api.get<IUser>(APIRoute.Login);
      dispatch(setUser(data));

      await dispatch(fetchFavoriteOffers());
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, IThunkConfig>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data, data: { token } } = await api.post<IUser>(APIRoute.Login, { email, password });
    dispatch(setUser(data));
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));

    await dispatch(fetchFavoriteOffers());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, IThunkConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(removeUserData());
    dispatch(setFavoriteoffers([]));
  },
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setErrorParam(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
