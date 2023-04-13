import { combineReducers } from '@reduxjs/toolkit';
import loadingReducer from './loading';
import authorizationReducer from './authorization';
import offersReducer from './offers';
import chosenOfferReducer from './chosenOffer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  authorization: authorizationReducer,
  offers: offersReducer,
  chosenOffer: chosenOfferReducer
});

export default rootReducer;
