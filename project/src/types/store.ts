import { store } from 'store';
import { Offer, ReviewObject } from './index';

export type InitialState = {
  isLoaded: boolean;
  authorizationStatus: boolean;
  city: string;
  sortType: string | null;
  offers: Offer[] | undefined;
  offerToShow: Offer | undefined;
  offersNearby: Offer[] | undefined;
  offerReviews: ReviewObject[] | undefined;
  hoveredOffer: Offer | undefined;
}

export type AppDispatch = typeof store.dispatch;
