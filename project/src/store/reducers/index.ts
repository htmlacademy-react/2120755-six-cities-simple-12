import { combineReducers } from '@reduxjs/toolkit';
import { loadingSlice } from './loading';
import { authorizationSlice } from './authorization';
import { OffersSlice } from './offers';
import { chosenOfferSlice } from './chosenOffer';

export const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  authorization: authorizationSlice.reducer,
  offers: OffersSlice.reducer,
  chosenOffer: chosenOfferSlice.reducer
});

export default rootReducer;
