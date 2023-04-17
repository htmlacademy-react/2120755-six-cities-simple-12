import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '@utils/const';
import { saveToken, removeToken } from '@utils/token';
import { Offer, Review, ReviewObject, LoginData, UserData} from '@customTypes/index';

function createAsyncThunkTeamplate<ResultType, TargetType>() {
  return createAsyncThunk<
  ResultType,
  TargetType,
  {extra: AxiosInstance}
  >;
}

export const checkAuthAction = createAsyncThunkTeamplate<UserData, undefined>()(
  'GET to /login',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData>(ApiRoutes.login);
    return data;
  },
);

export const login = createAsyncThunkTeamplate<UserData, LoginData>()(
  'POST to /login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoutes.login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logout = createAsyncThunkTeamplate<void, undefined>()(
  'DELETE to /login',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoutes.logout);
    removeToken();
  },
);

export const fetchOffers = createAsyncThunkTeamplate<Offer[], undefined>()(
  'GET to /hotels',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    return data;
  },
);

export const fetchOfferData = createAsyncThunkTeamplate<Offer| undefined, number | undefined>()(
  'GET to /hotels/:id',
  async (id, {extra: api}) => {
    if (id === undefined) {
      return undefined;
    }
    const {data} = await api.get<Offer>(`${ApiRoutes.offer}${id}`);
    return data;
  });

export const fetchOffersNearby = createAsyncThunkTeamplate<Offer[]| undefined, number | undefined>()(
  'GET to /hotels/:id/nearby',
  async (id, {extra: api}) => {
    if (id === undefined) {
      return undefined;
    }
    const {data} = await api.get<Offer[]>(`${ApiRoutes.offer}${id}/nearby`);
    return data;
  });

export const fetchOffersReviews = createAsyncThunkTeamplate<ReviewObject[] | undefined, number | undefined>()(
  'GET to /comments/:id',
  async (id, {extra: api}) => {
    if (id === undefined) {
      return undefined;
    }
    const {data} = await api.get<ReviewObject[]>(`${ApiRoutes.offerReview}${id}`);
    return data;
  });

export const postReview = createAsyncThunkTeamplate<ReviewObject[], Review>()(
  'POST to /comments/:id',
  async ({comment, rating, id}: Review, {extra: api}) => {
    const {data} = await api.post<ReviewObject[]>(`${ApiRoutes.offerReview}${id}`, {comment, rating});
    return data;
  },
);
