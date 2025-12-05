import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../../constants';
import { IBaseOffer } from '../../types/offers';
import { AuthData, UserData } from '../../types/user';
import { AppDispatch, RootState, store } from '..';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../../constants';
import { setAuthorizationStatus } from '../reducers/userSlice';
import { dropToken, saveToken } from '../../services/token';
import { setOffers } from '../reducers/offerSlice';
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
      dispatch(setErrorParam(error as string)); // !!!!!
    } finally {
      dispatch(setLoadingParam(false));
    }
  }
);

export const checkAuthStatus = createAsyncThunk<void, undefined, ThunkConfig>(
  'user/checkAuthStatus',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkConfig>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
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

// export const fetchOffers = createAsyncThunk(
//   'offer/fetchAllOffers',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await createAPI().get<IBaseOffer[]>(APIRoute.Offers);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Не удалось загрузить предложения об аренде!');
//     }
//   }
// );

// export const checkAuthStatus = createAsyncThunk(
//   'user/checkAuthStatus',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await createAPI().get<IUser>(APIRoute.Login);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Не удалось проверить статус авторизации пользователя!');
//     }
//   });
