import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '@utils/const';
import { loadOffers } from './action';
import { Offer } from '@customTypes/index';

export const fetchOffers = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'hotels/',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);
