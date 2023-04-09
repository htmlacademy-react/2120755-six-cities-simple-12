import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOffers, findOfferById, findOfferNearby, findOfferReviews, checkAuthorization, loadUserData } from './action';
import { ApiRoutes } from '@utils/const';
import { saveToken, removeToken } from '@utils/token';
import { Offer, ReviewObject, LoginData, UserData} from '@customTypes/index';

export const checkAuthAction = createAsyncThunk<
void,
undefined,
{ extra: AxiosInstance}
>('GET to /login',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(ApiRoutes.login);
      dispatch(checkAuthorization(true));
      dispatch(loadUserData(data));
    } catch {
      dispatch(checkAuthorization(false));
    }
  },
);

export const login = createAsyncThunk<
void,
LoginData,
{extra: AxiosInstance}
>('POST to /login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoutes.login, {email, password});
    saveToken(data.token);
    dispatch(loadUserData(data));
    dispatch(checkAuthorization(true));
  },
);

export const logout = createAsyncThunk<
void,
undefined,
{extra: AxiosInstance}
>('DELETE to /login',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoutes.logout);
    removeToken();
    dispatch(checkAuthorization(false));
  },
);

export const fetchOffers = createAsyncThunk<
void,
undefined,
{ extra: AxiosInstance }
>('GET to /hotels',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);

export const fetchOfferData = createAsyncThunk<
  void,
  number,
  {extra: AxiosInstance}
>('GET to /hotels/:id',
  async (id, { dispatch, extra: api }) => {
    const [offerResponse, nearbyResponse, reviewResponse] = await Promise.all([
      api.get<Offer>(`${ApiRoutes.offer}${id}`),
      api.get<Offer[]>(`${ApiRoutes.offer}${id}/nearby`),
      api.get<ReviewObject[]>(`${ApiRoutes.offerReview}${id}`)
    ]);
    dispatch(findOfferById(offerResponse.data));
    dispatch(findOfferNearby(nearbyResponse.data));
    dispatch(findOfferReviews(reviewResponse.data));
  });


