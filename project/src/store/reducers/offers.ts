import { createSlice } from '@reduxjs/toolkit';
import {loadOffers, changeCity, changeSortType } from '../action';
import { priceLowToHigh, priceHighToLow, topRaiting, idLowToHigh } from '@utils/sort-functions';
import { offersState } from '@customTypes/store';

const OffersSlice = createSlice({
  name: 'authorization',
  initialState: {
    city: 'Paris',
    sortType: 'Popular',
    offers: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadOffers, (state: offersState, action) => {
        state.offers = action.payload;
      })
      .addCase(changeCity, (state: offersState, action) => {
        state.city = action.payload;
      })
      .addCase(changeSortType, (state: offersState, action) => {
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
      });
  },
});

export default OffersSlice.reducer;
