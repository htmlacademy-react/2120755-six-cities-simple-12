import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList, markOfferOnCard } from './action';
import { offersList } from 'mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offersList.filter((offer) => offer.city.name === 'Paris'),
  hoveredOffer: offersList[-1],
};

export const storeUpdate = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state) => {
      state.offers = offersList.filter((offer) => offer.city.name === state.city);
    })
    .addCase(markOfferOnCard, (state, action) => {
      state.hoveredOffer = action.payload;
    });
});
