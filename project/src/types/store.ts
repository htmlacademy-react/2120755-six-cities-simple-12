import { store } from 'store';
import { Offer, ReviewObject, UserData } from './index';

export type loadingState = {
  isLoaded: boolean;
}

export type authorizationState = {
  authorized: boolean;
  userData: UserData | undefined;
}

export type offersState = {
  city: string;
  sortType: string | null;
  offers: Offer[] | undefined;
}

export type chosenOfferState = {
  offerToShow: Offer | undefined;
  offersNearby: Offer[] | undefined;
  offerReviews: ReviewObject[] | undefined;
  hoveredOffer: Offer | undefined;
}

export type InitialState = {
loading: loadingState;
authorization: authorizationState;
offers: offersState;
chosenOffer: chosenOfferState;
}

export type AppDispatch = typeof store.dispatch;
