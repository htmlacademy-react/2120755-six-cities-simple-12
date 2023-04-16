import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchOffers, fetchOfferData } from 'store/api-actions';
import { LoadingState } from '@customTypes/store';

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
      .addCase(fetchOffers.pending, (state: LoadingState) => {
        state.isLoaded = false;
      })
      .addCase(fetchOffers.fulfilled, (state: LoadingState) => {
        state.isLoaded = true;
      })
      .addCase(fetchOfferData.pending, (state: LoadingState) => {
        state.isLoaded = false;
      })
      .addCase(fetchOfferData.fulfilled, (state: LoadingState) => {
        state.isLoaded = true;
      });
  },
});

export const { changeLoadingStatus } = loadingSlice.actions;
