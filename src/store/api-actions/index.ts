import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../../constants';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { AuthData, IUser } from '../../types/user';
import { AppDispatch, RootState, store } from '..';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../../constants';
import { removeUserData, setAuthorizationStatus, setUser } from '../reducers/userSlice';
import { dropToken, saveToken } from '../../services/token';
import { setFullOffer, setOffers, setOffersNearby } from '../reducers/offerSlice';
import { setErrorParam, setLoadingParam } from '../reducers/appSlice';

interface ThunkConfig {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<void, undefined, ThunkConfig>(
  'offer/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingParam(true));
    try {
      const { data } = await api.get<IBaseOffer[]>(APIRoute.Offers);
      dispatch(setOffers(data));
    } catch (error) {
      dispatch(setErrorParam('Не удалось загрузить предложения об аренде'));
    } finally {
      dispatch(setLoadingParam(false));
    }
  }
);

export const fetchOfferById = createAsyncThunk<void, string, ThunkConfig>(
  'offer/fetchOfferById',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IFullOffer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setFullOffer(data));
    } catch (error) {
      dispatch(setErrorParam('Не удалось загрузить выбранное предложение об аренде'));
      throw error;
    }
  }
);

export const fetchOfferByIdNearby = createAsyncThunk<void, string, ThunkConfig>(
  'offer/fetchOfferByIdNearby',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IBaseOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);
      dispatch(setOffersNearby(data));
    } catch (error) {
      dispatch(setErrorParam('Не удалось загрузить предложения об аренде по близости'));
      throw error;
    }
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
