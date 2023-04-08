import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '@utils/const';
import { loadOffers, findOfferById, findOfferNearby, findOfferReviews, login } from './action';
import { Offer, ReviewObject, AuthorizationObject } from '@customTypes/index';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoutes.login);
      dispatch(login(AuthorizationStatus.Auth));
    } catch {
      dispatch(login(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthorizationObject , {
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<AuthorizationObject>(ApiRoutes.login, {email, password});
    saveToken(token);
    dispatch(login(AuthorizationStatus.Auth));
  },
);

// export const logoutAction = createAsyncThunk<void, undefined, {
//   extra: AxiosInstance;
// }>(
//   'user/logout',
//   async (_arg, {dispatch, extra: api}) => {
//     await api.delete(APIRoute.Logout);
//     dropToken();
//     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//   },
// );

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
