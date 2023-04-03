import { createReducer } from '@reduxjs/toolkit';
import { changeCity, markOfferOnCard, findOfferById, findOfferNearby, findOfferReviews } from './action';
import { mockOffersList } from 'mocks/offers';
import { mockOfferToShow } from 'mocks/offerToShow';
import { mockOffersNearby } from 'mocks/offersNearby';
import { mockReviewList } from 'mocks/review';
import { InitialState } from '@customTypes/store';

const initialState: InitialState = {
  city: 'Paris',
  offers: mockOffersList,
  offerToShow: mockOffersList[-1],
  offersNearby: mockOffersList,
  offerReviews: mockReviewList,
  hoveredOffer: mockOffersList[-1],
};

export const storeUpdate = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(markOfferOnCard, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(findOfferById, (state, action) => {
      state.offerToShow = mockOfferToShow ;
    })
    .addCase(findOfferNearby, (state, action) => {
      state.offersNearby = mockOffersNearby ;
    })
    .addCase(findOfferReviews, (state, action) => {
      state.offersNearby = mockOffersNearby ;
    });
});
