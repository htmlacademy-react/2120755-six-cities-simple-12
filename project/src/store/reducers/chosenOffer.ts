import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { findOfferById, findOfferNearby, findOfferReviews } from '../action';
import { fetchOfferData, fetchOffersNearby, fetchOffersReviews, postReview } from 'store/api-actions';
import { ChosenOfferState } from '@customTypes/store';
import { Offer } from '@customTypes/index';

export const chosenOfferSlice = createSlice({
  name: 'chosenOffer',
  initialState: {
    offerToShow: undefined,
    offersNearby: undefined,
    offerReviews: undefined,
    hoveredOffer: undefined,
  },
  reducers: {
    markOfferOnCard: (state: ChosenOfferState, action: PayloadAction<Offer>) => {
      state.hoveredOffer = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferData.fulfilled, (state: ChosenOfferState, action) => {
        state.offerToShow = action.payload;
      })
      .addCase(fetchOffersNearby.fulfilled, (state: ChosenOfferState, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchOffersReviews.fulfilled, (state: ChosenOfferState, action) => {
        state.offerReviews = action.payload;
      })
      .addCase(postReview.fulfilled, (state: ChosenOfferState, action) => {
        state.offerReviews = action.payload;
      });
  },
});

export const { markOfferOnCard } = chosenOfferSlice.actions;
