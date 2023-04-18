import { PayloadAction, createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { fetchOffers, fetchOfferData } from 'store/api-actions';
import { LoadingState, InitialState } from '@customTypes/store';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoaded: false,
  },
  reducers: {
    changeLoadingStatus: (state: LoadingState, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state: LoadingState) => {
        state.isLoaded = true;
      })
      .addCase(fetchOffers.rejected, (state: LoadingState) => {
        state.isLoaded = true;
      })
      .addCase(fetchOfferData.pending, (state: LoadingState) => {
        state.isLoaded = false;
      })
      .addCase(fetchOfferData.rejected, (state: LoadingState) => {
        state.isLoaded = true;
      })
      .addCase(fetchOfferData.fulfilled, (state: LoadingState) => {
        state.isLoaded = true;
      });
  },
});

const selectLoadingStatus = (state: InitialState) => state.loading.isLoaded;

const loadingStatusSelector = createDraftSafeSelector(
  selectLoadingStatus,
  (isLoaded: boolean) => isLoaded
);

export const { changeLoadingStatus } = loadingSlice.actions;
export { loadingStatusSelector };
