import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchOffers, fetchOfferData } from '../api-actions';
import { LoadingState, InitialState } from '@customTypes/store';

const loadingInitialState: LoadingState = {
  isLoaded: false,
  isOfferLoaded: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: loadingInitialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state) => {
        state.isLoaded = true;
      })
      .addCase(fetchOfferData.pending, (state) => {
        state.isOfferLoaded = false;
      })
      .addCase(fetchOfferData.fulfilled, (state) => {
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

export { loadingStatusSelector, loadingOfferStatusSelector };
