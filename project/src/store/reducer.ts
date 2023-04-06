import { createReducer } from '@reduxjs/toolkit';
import { changeCity, markOfferOnCard, findOfferById, findOfferNearby, findOfferReviews, changeSortType } from './action';
import { mockOffersList } from 'mocks/offers';
import { mockOfferToShow } from 'mocks/offerToShow';
import { mockOffersNearby } from 'mocks/offersNearby';
import { mockReviewList } from 'mocks/review';
import { InitialState } from '@customTypes/store';
import { Offer } from '@customTypes/index';

const initialState: InitialState = {
  city: 'Paris',
  sortType: 'Popular',
  offers: mockOffersList,
  offerToShow: mockOffersList[-1],
  offersNearby: mockOffersList,
  offerReviews: mockReviewList,
  hoveredOffer: mockOffersList[-1],
};

function priceHighToLow(a: Offer, b: Offer) {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
}

function priceLowToHigh(a: Offer, b: Offer) {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  return 0;
}

function topRaiting(a: Offer, b: Offer) {
  if (a.rating > b.rating) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
}


export const storeUpdate = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(markOfferOnCard, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(findOfferById, (state, action) => {
      state.offerToShow = mockOfferToShow;
    })
    .addCase(findOfferNearby, (state, action) => {
      state.offersNearby = mockOffersNearby ;
    })
    .addCase(findOfferReviews, (state, action) => {
      state.offersNearby = mockOffersNearby ;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
      if (action.payload === 'Price: high to low') {
        state.offers = state.offers.sort(priceHighToLow);
      }
      if (action.payload === 'Price: low to high') {
        state.offers = state.offers.sort(priceLowToHigh);
      }
      if (action.payload === 'Top rated first') {
        state.offers = state.offers.sort(topRaiting);
      }
      if (action.payload === 'Popular') {
        state.offers = mockOffersList;
      }
    });
});
