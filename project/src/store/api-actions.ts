import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { ApiRoutes } from '@utils/const';
import { loadOffers } from './action';
import { InitialState } from '@customTypes/store';
import { Offer } from '@customTypes/index';
import { AppDispatch } from '@customTypes/store';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'hotels/',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);

export const fetchOffer = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'hotels/:id',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);

