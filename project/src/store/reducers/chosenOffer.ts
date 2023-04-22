import { PayloadAction, createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { fetchOfferData, fetchOffersNearby, fetchOffersReviews, postReview } from '../api-actions';
import { ChosenOfferState, InitialState } from '@customTypes/store';
import { Offer, ReviewObject } from '@customTypes/index';

const chosenOffersInitialState: ChosenOfferState = {
  offerToShow: undefined,
  offersNearby: undefined,
  offerReviews: undefined,
  hoveredOffer: undefined,
};

export const chosenOfferSlice = createSlice({
  name: 'chosenOffer',
  initialState: chosenOffersInitialState,
  reducers: {
    markOfferOnCard: (state, action: PayloadAction<Offer>) => {
      state.hoveredOffer = action.payload;
    },
    cleanOfferToShowData: (state) => {
      state.offerToShow = undefined;
      state.offersNearby = undefined;
      state.offerReviews = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferData.fulfilled, (state, action) => {
        state.offerToShow = action.payload;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchOffersReviews.fulfilled, (state, action) => {
        state.offerReviews = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.offerReviews = action.payload;
      });
  },
});

const selectOfferToShow = (state: InitialState) => state.chosenOffer.offerToShow;
const selectOffersNearby = (state: InitialState) => state.chosenOffer.offersNearby;
const selectOffersReviews = (state: InitialState) => state.chosenOffer.offerReviews;
const selectOffersToMark = (state: InitialState) => state.chosenOffer.hoveredOffer;


const offerToShowSelector = createDraftSafeSelector(
  selectOfferToShow,
  (offerToShow: Offer | undefined | null) => offerToShow
);

const offersNearbySelector = createDraftSafeSelector(
  selectOffersNearby,
  (offersNearby: Offer[] | undefined) => offersNearby
);

const offersReviewsSelector = createDraftSafeSelector(
  selectOffersReviews,
  (offersReviews: ReviewObject[] | undefined) => offersReviews
);

const offerToMarkSelector = createDraftSafeSelector(
  selectOffersToMark,
  (hoveredOffer: Offer | undefined) => hoveredOffer
);

const offerToShowImagesSelector = createDraftSafeSelector(
  selectOfferToShow,
  (offerToShow: Offer | undefined | null) => offerToShow?.images
);

export const { markOfferOnCard, cleanOfferToShowData } = chosenOfferSlice.actions;
export { offerToShowSelector, offersNearbySelector, offersReviewsSelector, offerToMarkSelector, offerToShowImagesSelector };
