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

export const checkAuthAction = createAsyncThunkTeamplate<UserData | undefined, undefined>()(
  'GET to /login',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(ApiRoutes.Login);
    return data;
  },
);

export const login = createAsyncThunkTeamplate<UserData, LoginData>()(
  'POST to /login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoutes.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logout = createAsyncThunkTeamplate<void, undefined>()(
  'DELETE to /login',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoutes.Logout);
    removeToken();
  },
);

export const fetchOffers = createAsyncThunkTeamplate<Offer[], undefined>()(
  'GET to /hotels',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.Offers);
    return data;
  },
);

export const fetchOfferData = createAsyncThunkTeamplate<Offer | null, number>()(
  'GET to /hotels/:id',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${ApiRoutes.Offer}${id}`);
      return data;}
    catch {
      return null;
    }
  });

export const fetchOffersNearby = createAsyncThunkTeamplate<Offer[]| undefined, number>()(
  'GET to /hotels/:id/nearby',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoutes.Offer}${id}/nearby`);
    return data;
  });

export const fetchOffersReviews = createAsyncThunkTeamplate<ReviewObject[] | undefined, number>()(
  'GET to /comments/:id',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewObject[]>(`${ApiRoutes.OfferReview}${id}`);
    return data;
  });

export const postReview = createAsyncThunkTeamplate<ReviewObject[], Review>()(
  'POST to /comments/:id',
  async ({comment, rating, id}: Review, {extra: api}) => {
    const {data} = await api.post<ReviewObject[]>(`${ApiRoutes.OfferReview}${id}`, {comment, rating});
    return data;
  },
);
