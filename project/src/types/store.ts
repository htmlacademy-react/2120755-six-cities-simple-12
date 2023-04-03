import { Offer, ReviewObject } from './index';

export type InitialState = {
  city: string;
  offers: Offer[];
  offerToShow: Offer;
  offersNearby: Offer[];
  offerReviews: ReviewObject[];
  hoveredOffer: Offer;
}
