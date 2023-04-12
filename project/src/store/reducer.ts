import { createReducer } from '@reduxjs/toolkit';
import { changeCity, markOfferOnCard, findOfferById, findOfferNearby, findOfferReviews, changeSortType, loadOffers, changeLoadingStatus, checkAuthorization, loadUserData } from './action';
import { priceLowToHigh, priceHighToLow, topRaiting, idLowToHigh } from '@utils/sort-functions';
import { InitialState } from '@customTypes/store';

const initialState: InitialState = {
  isLoaded: false,
  authorized: false,
  userData: undefined,
  city: 'Paris',
  sortType: 'Popular',
  offers: undefined,
  offerToShow: undefined,
  offersNearby: undefined,
  offerReviews: undefined,
  hoveredOffer: undefined,
};

export const storeUpdate = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLoadingStatus, (state, action) => {
      state.isLoaded = action.payload;
    })
    .addCase(checkAuthorization, (state, action) => {
      state.authorized = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(markOfferOnCard, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(findOfferById, (state, action) => {
      state.offerToShow = action.payload;
    })
    .addCase(findOfferNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(findOfferReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
      if (action.payload === 'Price: high to low') {
        state.offers = state.offers?.sort(priceHighToLow);
      }
      if (action.payload === 'Price: low to high') {
        state.offers = state.offers?.sort(priceLowToHigh);
      }
      if (action.payload === 'Top rated first') {
        state.offers = state.offers?.sort(topRaiting);
      }
      if (action.payload === 'Popular') {
        state.offers = state.offers?.sort(idLowToHigh);
      }
    });
});
