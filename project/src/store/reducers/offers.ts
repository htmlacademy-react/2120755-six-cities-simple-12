import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchOffers } from 'store/api-actions';
import { priceLowToHigh, priceHighToLow, topRaiting, idLowToHigh } from '@utils/sort-functions';
import { OffersState } from '@customTypes/store';

export const OffersSlice = createSlice({
  name: 'offers',
  initialState: {
    city: 'Paris',
    sortType: 'Popular',
    offers: [],
  },
  reducers: {
    changeSortType: (state: OffersState, action: PayloadAction<string>) => {
      state.sortType = action.payload;
      if (action.payload === 'Price: high to low') {
        state.offers = state.offers?.sort(priceHighToLow);
      }
      if (action.payload === 'Price: low to high') {
        state.offers = state.offers?.sort(priceLowToHigh);
      }
      if (action.payload === 'Top rated first') {
        state.offers = state.offers?.sort(topRaiting);
      }
      if (action.payload === 'Popular') {
        state.offers = state.offers?.sort(idLowToHigh);
      }
    },
    changeCity: (state: OffersState, action: PayloadAction<string>) => {
      state.city = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state: OffersState, action) => {
        state.offers = action.payload;
      })
      .addCase(changeCity, (state: OffersState, action) => {
        state.city = action.payload;
      });
  },
});

export const { changeSortType, changeCity } = OffersSlice.actions;
