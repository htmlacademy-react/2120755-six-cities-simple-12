import { Offer } from 'mocks/offers';

export type InitialState = {
  city: string;
  offers: Offer[];
  hoveredOffer: Offer;
}
