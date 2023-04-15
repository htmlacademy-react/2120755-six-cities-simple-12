import { store } from 'store';
import { Offer, ReviewObject, UserData } from './index';

export type InitialState = {
  isLoaded: boolean;
  authorized: boolean;
  userData: UserData | undefined;
  city: string;
  sortType: string | null;
  offers: Offer[];
  offerToShow: Offer | undefined;
  offersNearby: Offer[] | undefined;
  offerReviews: ReviewObject[] | undefined;
  hoveredOffer: Offer | undefined;
}

export type AppDispatch = typeof store.dispatch;
