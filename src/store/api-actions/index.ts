import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../../constants';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { AuthData, IUser } from '../../types/user';
import { AppDispatch, RootState, store } from '..';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../../constants';
import { removeUserData, setAuthorizationStatus, setUser } from '../reducers/userSlice';
import { dropToken, saveToken } from '../../services/token';
import { setComments, setFullOffer, setOffers, setOffersNearby, setReview } from '../reducers/offerSlice';
import { setErrorParam, setLoadingParam } from '../reducers/appSlice';
import { IReview, IReviewData } from '../../types/reviews';

interface ThunkConfig {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<void, undefined, ThunkConfig>(
  'offer/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingParam(true));

    await api.get<IBaseOffer[]>(APIRoute.Offers)
      .then(({ data }) => {
        console.log('fetchOffers', data);
        dispatch(setOffers(data));
      })
      .finally(() => {
        dispatch(setLoadingParam(false));
      });
    // try {
    //   const { data } = await api.get<IBaseOffer[]>(APIRoute.Offers);
    //   dispatch(setOffers(data));
    // } catch (error) {
    //   if (error && typeof error === 'object' && 'message' in error) {
    //     const typedError = error as ApiError | Error;
    //     dispatch(setErrorParam(typedError.message));
    //   } else {
    //     // Если error не объект с полем message
    //     dispatch(setErrorParam('Не удалось загрузить предложения об аренде'));
    //   }
    // } finally {
    //   dispatch(setLoadingParam(false));
    // }
  }
);

export const fetchOfferById = createAsyncThunk<void, string, ThunkConfig>(
  'offer/fetchOfferById',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<IFullOffer>(`${APIRoute.Offers}/${offerId}`);
    console.log('fetchOfferById', data);
    dispatch(setFullOffer(data));
  }
);

export const fetchComments = createAsyncThunk<void, string, ThunkConfig>(
  'offer/fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<IReview[]>(`${APIRoute.Comments}/${offerId}`);
    console.log('fetchComments', data
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10));
    dispatch(
      setComments(
        data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10)
      )
    );
  }
);

export const addNewReviewOnSite = createAsyncThunk<void, IReviewData, ThunkConfig>(
  'offer/addNewCommentsOnSite',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<IReview>(`${APIRoute.Comments}/${id}`, {comment, rating});
    console.log('addNewCommentsOnSite', data);
    dispatch(setReview(data));

    fetchComments(id);
  }
);

export const fetchOfferByIdNearby = createAsyncThunk<void, string, ThunkConfig>(
  'offer/fetchOfferByIdNearby',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<IBaseOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);
    console.log('fetchOfferByIdNearby', data.slice(0, 3));
    dispatch(setOffersNearby(data.slice(0, 3)));
  }
);

export const checkAuthStatus = createAsyncThunk<void, undefined, ThunkConfig>(
  'user/checkAuthStatus',
  async (_arg, { dispatch, extra: api }) => {
    try {
      //проверка авторизации
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));

      // запрос данных пользователя
      const { data } = await api.get<IUser>(APIRoute.Login);
      console.log('checkAuthStatus', data);
      dispatch(setUser(data));
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkConfig>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data, data: { token } } = await api.post<IUser>(APIRoute.Login, { email, password });
    console.log('login', data);
    dispatch(setUser(data));
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(removeUserData());
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
