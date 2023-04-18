import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchOffers, fetchOfferData } from 'store/api-actions';
import { LoadingState, InitialState } from '@customTypes/store';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoaded: false,
    isOfferLoaded: false,
  },
  reducers: {
    cleanOfferLoadingState: (state: LoadingState) => {
      state.isOfferLoaded = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state: LoadingState) => {
        state.isLoaded = true;
      })
      .addCase(fetchOfferData.pending, (state: LoadingState) => {
        state.isOfferLoaded = false;
      })
      .addCase(fetchOfferData.fulfilled, (state: LoadingState) => {
        state.isOfferLoaded = true;
      });
  },
});

const selectLoadingStatus = (state: InitialState) => state.loading.isLoaded;
const selectOfferLoadingStatus = (state: InitialState) => state.loading.isOfferLoaded;

const loadingStatusSelector = createDraftSafeSelector(
  selectLoadingStatus,
  (isLoaded: boolean) => isLoaded
);

const loadingOfferStatusSelector = createDraftSafeSelector(
  selectOfferLoadingStatus,
  (isLoaded: boolean) => isLoaded
);
export const { cleanOfferLoadingState } = loadingSlice.actions;
export { loadingStatusSelector, loadingOfferStatusSelector };
