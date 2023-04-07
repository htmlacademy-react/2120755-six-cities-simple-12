import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '@utils/const';
import { loadOffers, findOfferById, findOfferNearby, findOfferReviews } from './action';
import { Offer, ReviewObject } from '@customTypes/index';

export const fetchOffers = createAsyncThunk<
void,
undefined,
{ extra: AxiosInstance }
>('hotels/',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);

export const fetchOfferData = createAsyncThunk<
  void,
  number,
  { extra: AxiosInstance }
>('hotels/fetchOfferData', async (id, { dispatch, extra: api }) => {
  const [offerResponse, nearbyResponse, reviewResponse] = await Promise.all([
    api.get<Offer>(`${ApiRoutes.offer}${id}`),
    api.get<Offer[]>(`${ApiRoutes.offer}${id}/nearby`),
    api.get<ReviewObject[]>(`${ApiRoutes.offerReview}${id}`)
  ]);

  dispatch(findOfferById(offerResponse.data));
  dispatch(findOfferNearby(nearbyResponse.data));
  dispatch(findOfferReviews(reviewResponse.data));
});
