import { createSlice } from '@reduxjs/toolkit';
import { markOfferOnCard, findOfferById, findOfferNearby, findOfferReviews, } from '../action';
import { chosenOfferState } from '@customTypes/store';

const chosenOfferSlice = createSlice({
  name: 'authorization',
  initialState: {
    offerToShow: undefined,
    offersNearby: undefined,
    offerReviews: undefined,
    hoveredOffer: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(markOfferOnCard, (state: chosenOfferState, action) => {
        state.hoveredOffer = action.payload;
      })
      .addCase(findOfferById, (state: chosenOfferState, action) => {
        state.offerToShow = action.payload;
      })
      .addCase(findOfferNearby, (state: chosenOfferState, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(findOfferReviews, (state: chosenOfferState, action) => {
        state.offerReviews = action.payload;
      });
  },
});

export default chosenOfferSlice.reducer;
