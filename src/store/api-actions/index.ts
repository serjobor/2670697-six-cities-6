import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../constants/paths';
import { createAPI } from '../../services/api';
import { IBaseOffer } from '../../types/offers';

export const fetchOffers = createAsyncThunk(
  'offer/fetchAllOffers',
  async (_, thunkAPI) => {
    try {
      const { data } = await createAPI().get<IBaseOffer[]>(`${APIRoute.Offers}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить предложения об аренде!');
    }
  }
);
