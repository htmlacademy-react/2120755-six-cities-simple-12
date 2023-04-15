import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOffers, findOfferById, findOfferNearby, findOfferReviews, checkAuthorization, loadUserData, changeLoadingStatus } from './action';
import { ApiRoutes } from '@utils/const';
import { saveToken, removeToken } from '@utils/token';
import { Offer, Review, ReviewObject, LoginData, UserData} from '@customTypes/index';

function createAsyncThunkTeamplate<TargetType>() {
  return createAsyncThunk<
  void,
  TargetType,
  {extra: AxiosInstance}
  >;
}

export const checkAuthAction = createAsyncThunkTeamplate<undefined>()(
  'GET to /login',
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

export const login = createAsyncThunkTeamplate<LoginData>()(
  'POST to /login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoutes.login, {email, password});
    saveToken(data.token);
    dispatch(loadUserData(data));
    dispatch(checkAuthorization(true));
  },
);

export const logout = createAsyncThunkTeamplate<undefined>()(
  'DELETE to /login',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoutes.logout);
    removeToken();
    dispatch(checkAuthorization(false));
  },
);

export const fetchOffers = createAsyncThunkTeamplate<undefined>()(
  'GET to /hotels',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoutes.offers);
    dispatch(loadOffers(data));
  },
);

export const fetchOfferData = createAsyncThunkTeamplate<number>()(
  'GET to /hotels/:id',
  async (id, { dispatch, extra: api }) => {
    const {data} = await api.get<Offer>(`${ApiRoutes.offer}${id}`);
    dispatch(findOfferById(data));
    dispatch(changeLoadingStatus(true));
  });

export const fetchOffersNearby = createAsyncThunkTeamplate<number>()(
  'GET to /hotels/:id/nearby',
  async (id, { dispatch, extra: api }) => {
    const {data} = await api.get<Offer[]>(`${ApiRoutes.offer}${id}/nearby`);
    dispatch(findOfferNearby(data));
  });

export const fetchOffersReviews = createAsyncThunkTeamplate<number>()(
  'GET to /comments/:id',
  async (id, { dispatch, extra: api }) => {
    const {data} = await api.get<ReviewObject[]>(`${ApiRoutes.offerReview}${id}`);
    dispatch(findOfferReviews(data));
  });

export const postReview = createAsyncThunkTeamplate<Review>()(
  'POST to /comments/:id',
  async ({comment, rating, id}: Review, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewObject[]>(`${ApiRoutes.offerReview}${id}`, {comment, rating});
    dispatch(findOfferReviews(data));
  },
);


