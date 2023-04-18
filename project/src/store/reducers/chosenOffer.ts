import { PayloadAction, createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { fetchOfferData, fetchOffersNearby, fetchOffersReviews, postReview } from 'store/api-actions';
import { ChosenOfferState, InitialState } from '@customTypes/store';
import { Offer, ReviewObject } from '@customTypes/index';

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
    },
    cleanOfferToShowState: (state: ChosenOfferState) => {
      state.offerToShow = undefined;
    },
    cleanOffersNearbyState: (state: ChosenOfferState) => {
      state.offersNearby = undefined;
    },
    cleanofferReviewsState: (state: ChosenOfferState) => {
      state.offerReviews = undefined;
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

const selectOfferToShow = (state: InitialState) => state.chosenOffer.offerToShow;
const selectOffersNearby = (state: InitialState) => state.chosenOffer.offersNearby;
const selectOffersReviews = (state: InitialState) => state.chosenOffer.offerReviews;
const selectOffersToMark = (state: InitialState) => state.chosenOffer.hoveredOffer;


const offerToShowSelector = createDraftSafeSelector(
  selectOfferToShow,
  (offerToShow: Offer | undefined) => offerToShow
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
  (offerToShow: Offer | undefined) => offerToShow?.images
);

export const { markOfferOnCard, cleanOfferToShowState, cleanOffersNearbyState, cleanofferReviewsState } = chosenOfferSlice.actions;
export { offerToShowSelector, offersNearbySelector, offersReviewsSelector, offerToMarkSelector, offerToShowImagesSelector };
