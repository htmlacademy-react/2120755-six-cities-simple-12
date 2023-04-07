import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '@utils/const';
import { loadOffers, findOfferById, findOfferNearby, findOfferReviews } from './action';
import { Offer, ReviewObject } from '@customTypes/index';

export const fetchOffers = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'hotels/',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);

export const fetchOffer = createAsyncThunk<void, number, {
  extra: AxiosInstance;
}>(
  'hotels/:id',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${ApiRoutes.offer}${id}`);
    dispatch(findOfferById(data));
  },
);

export const fetchOffersNearby = createAsyncThunk<void, number, {
  extra: AxiosInstance;
}>(
  'hotels/:id/nearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoutes.offer}${id}/nearby`);
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(findOfferNearby(data));
  },
);

export const fetchOfferReviews = createAsyncThunk<void, number, {
  extra: AxiosInstance;
}>(
  'hotels/comments/:id',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewObject[]>(`${ApiRoutes.offerReview}${id}`);
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(findOfferReviews(data));
  },
);
