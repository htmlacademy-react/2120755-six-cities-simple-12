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
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);

