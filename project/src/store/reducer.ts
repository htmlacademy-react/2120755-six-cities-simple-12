import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList } from './action';
import { offersList } from 'mocks/offers';
import { Offer } from 'mocks/offers';

type cityOffers = {
  city: string;
  offers: Offer[];
}

// Впиши сюда Париж + список его предложений.
// Потом проверь через main что приходит через store.getState()
// и попробуй применить в Main полученные данные.
// в навигате у тебя уже все готово (может и не нужно на кнопку вешать второе действие по сортироваке. Попробуй в мэйн фильтровать предложения в завимости от города который лежит в сторе.)
const initialState: cityOffers = {
  city: 'Paris',
  offers: [],
};
// eslint-disable-next-line no-console
console.log(offersList);


export const offerListUpdate = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(state.city);
      // eslint-disable-next-line no-console
      console.log(action.payload);
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state) => {
      // eslint-disable-next-line no-console
      console.log(state);
      // eslint-disable-next-line no-console
      console.log(offersList.filter((offer) => offer.city.name === state.city));
      state.offers = offersList.filter((offer) => offer.city.name === state.city);
    });
});
