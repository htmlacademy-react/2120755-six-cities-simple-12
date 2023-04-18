import { store } from 'store';
import { Offer, ReviewObject, UserData } from './index';

export type LoadingState = {
  isLoaded: boolean;
  isOfferLoaded:boolean;
}

export type AuthorizationState = {
  authorized: boolean;
  userData: UserData | undefined;
}

export type OffersState = {
  city: string;
  sortType: string | null;
  offers: Offer[] | undefined;
}

export type ChosenOfferState = {
  offerToShow: Offer | undefined;
  offersNearby: Offer[] | undefined;
  offerReviews: ReviewObject[] | undefined;
  hoveredOffer: Offer | undefined;
}

export type InitialState = {
loading: LoadingState;
authorization: AuthorizationState;
offers: OffersState;
chosenOffer: ChosenOfferState;
}

export type AppDispatch = typeof store.dispatch;
